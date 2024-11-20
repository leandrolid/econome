export type ColumnOptions = {
  name: string
  type: 'timestamp' | 'text' | 'integer' | 'bigint'
  default?: any
  generated?: boolean
  nullable?: boolean
}

export const Column = (options: ColumnOptions): PropertyDecorator => {
  return (target: any, key: string) => {
    const columns = Reflect.getMetadata('columns', target.constructor) || {}
    columns[key] = options
    Reflect.defineMetadata('columns', columns, target.constructor)
  }
}
