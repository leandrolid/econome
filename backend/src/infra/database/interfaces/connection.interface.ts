import { DataClass } from '@domain/adapters/data-class'

export interface Connection {
  insertInto<T>(target: typeof DataClass, values: Partial<T> | Partial<T>[]): Promise<T[]>
  exists<T>(target: typeof DataClass, values: Partial<T>): Promise<boolean>
}
