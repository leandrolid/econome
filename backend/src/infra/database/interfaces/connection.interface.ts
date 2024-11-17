import { Model } from './model.interface'

export interface Connection {
  insertInto<T>(target: Model, values: Partial<T> | Partial<T>[]): Promise<T[]>
}
