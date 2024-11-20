import { Pool } from 'pg'
import { Connection, Target } from '../interfaces/connection.interface'
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres'
import { ColumnOptions } from '../decorators/column.decorator'
import { bigint, integer, PgColumnBuilderBase, pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { and, eq } from 'drizzle-orm'
import { Logger } from '@nestjs/common'

export class DrizzleConnection implements Connection {
  private readonly connection: NodePgDatabase<Record<string, any>> & { $client: Pool }
  private readonly logger = new Logger('Connection')
  private static _instance: DrizzleConnection

  static get instance(): DrizzleConnection {
    if (!this._instance) {
      this._instance = new DrizzleConnection()
    }
    return this._instance
  }

  private constructor() {
    this.connection = drizzle({
      connection: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
      casing: 'snake_case',
      logger: {
        logQuery: (query, params: any[]) => {
          this.logger.debug(
            params.reduce((acc, param, index) => acc.replace(`$${index + 1}`, param), query),
          )
        },
      },
    }) as any
  }

  async query(sql: string, values?: any[]): Promise<any> {
    const query = !Array.isArray(values)
      ? sql
      : values.reduce((acc, value, index) => acc.replace(`$${index + 1}`, value), sql)
    return this.connection.execute(query)
  }

  async destroy(): Promise<void> {
    await this.connection.$client.end()
  }

  async insertInto<T>(target: Target, values: Partial<T> | Partial<T>[]): Promise<T[]> {
    const schema = this.getTableSchema(target)
    const result = await this.connection
      .insert(schema)
      .values(values as Record<string, unknown>)
      .returning()
    return result as T[]
  }

  async exists<T>(target: Target, where: Partial<T>): Promise<boolean> {
    const schema = this.getTableSchema(target)
    const result = await this.connection
      .select()
      .from(schema)
      .where(
        and(
          ...Object.entries(where).map(([key, value]) => {
            return eq(schema[key], value)
          }),
        ),
      )
      .limit(1)
    return result.length > 0
  }

  private getTableSchema(Target: Target) {
    const tableName: string = Reflect.getMetadata('tableName', Target)
    const columns: Record<string, ColumnOptions> = Reflect.getMetadata('columns', Target)
    return pgTable(
      tableName,
      Object.entries(columns).reduce(
        (acc, [columnName, columnOptions]) => {
          return {
            ...acc,
            [columnName]: this.buildColumnSchema(columnOptions),
          }
        },
        {} as Record<string, PgColumnBuilderBase>,
      ),
    )
  }

  private buildColumnSchema(columnOptions: ColumnOptions): PgColumnBuilderBase {
    let column = this.getColumnType(columnOptions.type)
    if (!columnOptions.nullable) column.notNull()
    if (columnOptions.default) column.default(columnOptions.default)
    if (columnOptions.generated) column = integer().primaryKey().generatedAlwaysAsIdentity() as any
    return column
  }

  private getColumnType(type: string) {
    switch (type) {
      case 'text':
        return text()
      case 'bigint':
        return bigint({ mode: 'number' })
      case 'timestamp':
        return timestamp()
      default:
        return text()
    }
  }
}
