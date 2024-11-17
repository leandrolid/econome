import * as pgPromise from 'pg-promise'
import { Injectable } from '@infra/injection/injectable'
import { ColumnOptions } from '../decorators/column.decorator'
import { Connection as ConnectionInterface } from '../interfaces/connection.interface'
import { DataClass } from '@domain/adapters/data-class'

type Target = typeof DataClass

@Injectable()
export class Connection implements ConnectionInterface {
  private database: pgPromise.IDatabase<any>
  private static _instance: Connection

  static get instance(): Connection {
    if (!this._instance) {
      this._instance = new Connection()
    }
    return this._instance
  }

  private constructor() {
    this.database = pgPromise({
      query(e) {
        console.log('QUERY:', e.query)
      },
    })({
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT!),
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    })
  }

  query(sql: string, values: any[]): Promise<any> {
    return this.database.query(sql, values)
  }

  destroy() {
    return this.database.$pool.end()
  }

  async insertInto<T>(Target: Target, values: Partial<T> | Partial<T>[]): Promise<T[]> {
    const arrayValues = Array.isArray(values) ? values : [values]
    const tableName = this.getTableName(Target)
    const { columns, columnsMap } = this.getColumns(Target)
    const serializedValues = arrayValues.map((value) =>
      this.serialize({
        inputData: value,
        columnsMap,
        options: {
          useDefault: true,
        },
      }),
    )
    const variables = serializedValues.map((_, rowIndex) => {
      return `(${columns.map((_, columnIndex) => `$${rowIndex * columns.length + columnIndex + 1}`).join(', ')})`
    })
    const results = await this.query(
      `INSERT INTO
        ${tableName} (${columns.join(', ')})
      VALUES
        ${variables.join(', ')}
      RETURNING *`,
      [...serializedValues.flatMap((value) => columns.map((column) => value[column]))],
    )
    return results.map((result) => this.deserialize(result, columnsMap))
  }

  async exists<T>(Target: Target, values: Partial<T>): Promise<boolean> {
    const tableName = this.getTableName(Target)
    const { columnsMap } = this.getColumns(Target, { includeGenerated: true })
    const serializedValues = this.serialize({
      inputData: values,
      columnsMap,
    })
    const columns = Object.keys(serializedValues)
    const results = await this.query(
      `SELECT EXISTS(
        SELECT 1
        FROM ${tableName}
        WHERE ${columns.map((column, index) => `${column} = $${index + 1}`).join(' AND ')}
        LIMIT 1
      )`,
      columns.map((column) => serializedValues[column]),
    )
    return results[0].exists
  }

  private getTableName(Target: Target): string {
    return Reflect.getMetadata('tableName', Target)
  }

  private getColumns(Target: Target, options: { includeGenerated?: boolean } = {}) {
    const columns = Reflect.getMetadata('columns', Target) as Record<string, ColumnOptions>
    const filteredColumns = Object.values(columns)
      .filter((column) => (options.includeGenerated ? true : !column.generated))
      .map((column) => column.name!)
    return {
      columns: filteredColumns,
      columnsMap: columns,
    }
  }

  private serialize({
    inputData,
    columnsMap,
    options = { useDefault: false },
  }: {
    inputData: any
    columnsMap: Record<string, ColumnOptions>
    options?: {
      useDefault?: boolean
    }
  }): any {
    return Object.entries(columnsMap).reduce((acc, [key, column]) => {
      const defaultValue = options.useDefault ? column.default : undefined
      const value = this.serializeValue(column.type, inputData[key] ?? defaultValue)
      if (value === undefined) return acc
      return { ...acc, [column.name!]: value }
    }, {})
  }

  private serializeValue(type: ColumnOptions['type'], value: any) {
    switch (type) {
      case 'timestamp':
        return value instanceof Date ? pgPromise.as.date(value) : value
      default:
        return value
    }
  }

  private deserialize(rowData: any, columnsMap: Record<string, ColumnOptions>): any {
    return Object.entries(columnsMap).reduce((acc, [key, column]) => {
      acc[key] = this.deserializeValue(column.type, rowData[column.name!])
      return acc
    }, {})
  }

  private deserializeValue(type: ColumnOptions['type'], value: any) {
    switch (type) {
      case 'timestamp':
        return value && new Date(value)
      default:
        return value
    }
  }
}
