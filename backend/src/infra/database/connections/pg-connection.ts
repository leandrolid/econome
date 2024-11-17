import * as pgPromise from 'pg-promise'
import { Model } from '../interfaces/model.interface'
import { Injectable } from '@infra/injection/injectable'
import { ColumnOptions } from '../decorators/column.decorator'
import { Connection as ConnectionInterface } from '../interfaces/connection.interface'

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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      query(e) {
        // console.log('QUERY:', e.query)
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

  async insertInto<T>(target: Model, values: Partial<T> | Partial<T>[]): Promise<T[]> {
    const arrayValues = Array.isArray(values) ? values : [values]
    const tableName = this.getTableName(target)
    const { columns, columnsMap } = this.insertColumns(target)
    const serializedValues = arrayValues.map((value) => this.serialize(value, columnsMap))
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

  private getTableName(target: Model): string {
    return Reflect.getMetadata('tableName', target)
  }

  private insertColumns(target: Model) {
    const columns = Reflect.getMetadata('columns', target) as Record<string, ColumnOptions>
    const filteredColumns = Object.values(columns)
      .filter((column) => !column.generated)
      .map((column) => column.name!)
    return {
      columns: filteredColumns,
      columnsMap: columns,
    }
  }

  private serialize(inputData: any, columnsMap: Record<string, ColumnOptions>): any {
    return Object.entries(columnsMap).reduce((acc, [, column]) => {
      acc[column.name!] = this.serializeValue(
        column.type,
        inputData[column.name!] ?? column.default,
      )
      return acc
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
