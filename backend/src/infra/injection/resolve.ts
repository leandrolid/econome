import { Context } from './context'

export const resolve = <T = any>(token: string): T => {
  return Context.instance.get(token)
}

export const ResolveParam = (token: string): ParameterDecorator => {
  return (target: any, propertyKey: string | symbol, parameterIndex: number) => {
    const params = Reflect.getOwnMetadata('design:paramtypes', target, propertyKey) || []
    params[parameterIndex] = Context.instance.get(token)
    Reflect.defineMetadata('design:paramtypes', params, target, propertyKey)
  }
}
