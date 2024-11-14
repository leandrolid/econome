import * as pgPromise from 'pg-promise'
import { Model } from './model'
import { DataClass } from 'src/domain/adapters/data-class'

export class Connection {
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
      port: parseInt(process.env.DB_PORT),
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

  async insertInto<T extends DataClass>(
    target: Model,
    values: Partial<T> | Partial<T>[],
  ): Promise<T[]> {
    const arrayValues = Array.isArray(values) ? values : [values]
    const tableName = this.getTableName(target)
    const { columns, columnsMap } = this.getColumns(target, ['id'])
    const serializedValues = arrayValues.map((value) => this.serialize(value, columnsMap))
    const results = await this.query(
      `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES $1 RETURNING id`,
      [
        ...serializedValues.map((value) => {
          return `(${columns.map((column) => value[column]).join(', ')})`
        }),
      ],
    )
    return results.map((result, index) => arrayValues[index].copy({ id: result.id }))
  }

  private getTableName(target: Model): string {
    return Reflect.getMetadata('tableName', target)
  }

  private getColumns(target: Model, ignore?: string[]) {
    const columns = Reflect.getMetadata('columns', target) as Record<string, any>
    const columnNames = Object.values(columns).map((column) => column.name)
    const filteredColumns = ignore
      ? Object.values(columnNames).filter((key) => !ignore.includes(key))
      : Object.values(columnNames)
    return {
      columns: filteredColumns,
      columnsMap: columns,
    }
  }

  private serialize(data: any, columnsMap: Record<string, any>): any {
    return Object.keys(data).reduce((acc, key) => {
      acc[columnsMap[key].name] = data[key]
      return acc
    }, {})
  }
}
