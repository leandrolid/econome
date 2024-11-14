export type ColumnOptions = {
  name?: string
  default?: any
  type?: 'timestamp' | 'text'
  generated?: boolean
}

export const Column = (options: ColumnOptions = {}) => {
  return (target: any, key: string) => {
    const columns = Reflect.getMetadata('columns', target.constructor) || {}
    if (options.name) columns[key] = options
    else columns[key] = { name: key }
    Reflect.defineMetadata('columns', columns, target.constructor)
  }
}
