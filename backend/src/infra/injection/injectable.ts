import { Context } from './context'

type InjectableOptions = {
  scope?: 'singleton' | 'transient'
  controller?: {
    method: 'get' | 'post' | 'put' | 'delete'
    path: string
  }
}

export const Injectable = (options: InjectableOptions = {}): ClassDecorator => {
  const { scope = 'singleton', controller } = options
  return (target: any) => {
    Reflect.defineMetadata('scope', scope, target)
    if (controller) {
      Context.instance.set(makeControllerToken(controller.method, controller.path), target)
    } else {
      Context.instance.set(target.name, target)
    }
  }
}

export const makeControllerToken = (method: string, path: string): string => {
  return `${method}-${path.replace(/^\//, '')}`.toLowerCase()
}
