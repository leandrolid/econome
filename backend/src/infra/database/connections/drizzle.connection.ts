import { Pool } from 'pg'
import { camel } from 'radash'
import { Connection, Target } from '../interfaces/connection.interface'
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres'
import { and, eq } from 'drizzle-orm'
import { Logger } from '@nestjs/common'
import * as schemas from '../schemas'

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
      connection: `${process.env.DB_URL}`,
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
    const schema = await this.getTableSchema(target)
    const result = await this.connection
      .insert(schema)
      .values(values as Record<string, unknown>)
      .returning()
    return result as T[]
  }

  async exists<T>(target: Target, where: Partial<T>): Promise<boolean> {
    const schema = await this.getTableSchema(target)
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

  private async getTableSchema(Target: Target) {
    const schemaName = `${camel(Target.name)}Schema`
    return schemas[schemaName]
  }
}
