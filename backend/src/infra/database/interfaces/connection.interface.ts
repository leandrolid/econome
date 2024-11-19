import { BaseEntity } from '@domain/entities/_base.entity'

export interface Connection {
  query(sql: string, values?: any[]): Promise<any>
  destroy(): Promise<void>
  insertInto<T>(target: typeof BaseEntity, values: Partial<T> | Partial<T>[]): Promise<T[]>
  exists<T>(target: typeof BaseEntity, values: Partial<T>): Promise<boolean>
}
