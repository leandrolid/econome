import { BaseEntity } from '@domain/entities/_base.entity'

export interface Connection {
  query(sql: string, values?: any[]): Promise<any>
  destroy(): Promise<void>
  insertInto<T>(target: Target, values: Partial<T> | Partial<T>[]): Promise<T[]>
  exists<T>(target: Target, values: Partial<T>): Promise<boolean>
  getId<T>(target: Target, values: Partial<T>): Promise<number>
}

export type Target = typeof BaseEntity
