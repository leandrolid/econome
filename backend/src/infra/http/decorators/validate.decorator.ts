import { BadRequestError } from '@domain/errors/bad-request.error'
import { HttpError } from '@domain/errors/http.error'
import { ZodError } from 'zod'

export const Validate = (): MethodDecorator => {
  return (_target: any, _propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value
    descriptor.value = function (...args: any[]) {
      try {
        return originalMethod.apply(this, args)
      } catch (error) {
        throw new BadRequestError(getError(error))
      }
    }
  }
}

const getError = (error: any): string => {
  if (error instanceof ZodError) {
    const firstError = error.errors[0]
    return `${firstError.path.join('.')}: ${firstError.message}`
  }
  if (error instanceof HttpError) {
    return `Desconhecido: ${error.message}`
  }
  return 'Desconhecido: Erro desconhecido'
}
