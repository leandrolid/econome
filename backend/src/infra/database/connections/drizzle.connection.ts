import { Pool } from 'pg'
import { camel } from 'radash'
import { Connection, Target } from '../interfaces/connection.interface'
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres'
import { and, eq } from 'drizzle-orm'
import { Logger } from '@nestjs/common'
import * as schemas from '../schemas'
import { PgTableWithColumns } from 'drizzle-orm/pg-core'

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
      client: new Pool({
        connectionString: process.env.DB_URL,
        max: 20,
        allowExitOnIdle: true,
      }),
      casing: 'snake_case',
      logger: {
        logQuery: (query, params: any[]) => {
          this.logger.debug(
            params.reduce((acc, param, index) => acc.replace(`$${index + 1}`, param), query),
          )
        },
      },
    })
  }

  async query(sql: string, values?: any[]): Promise<any> {
    return this.connection.$client.query(sql, values)
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

  async getId<T>(target: Target, where: Partial<T>): Promise<number> {
    const schema = this.getTableSchema(target)
    const result = await this.connection
      .select({ id: schema.id })
      .from(schema)
      .where(
        and(
          ...Object.entries(where).map(([key, value]) => {
            return eq(schema[key], value)
          }),
        ),
      )
      .limit(1)
    return result[0].id
  }

  private getTableSchema(Target: Target): PgTableWithColumns<any> {
    const schemaName = `${camel(Target.name)}Schema`
    return schemas[schemaName]
  }
}
