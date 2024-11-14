export const Entity = (name: string) => {
  return (target: any) => {
    Reflect.defineMetadata('tableName', name, target)
  }
}
