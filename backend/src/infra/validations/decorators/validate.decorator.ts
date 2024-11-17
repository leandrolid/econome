import { ZodError } from 'zod'
import { Validation } from '../interfaces/validation.interface'
import { BadRequestError } from '@domain/errors/bad-request.error'
import { resolve } from '@infra/injection/resolve'

interface ValidationTarget extends Function {
  new (): Validation<any>
}

export const Validate = (validationTarget: ValidationTarget): ParameterDecorator => {
  return (target, propertyKey, parameterIndex) => {
    try {
      const validation = resolve<Validation<any>>(validationTarget.name)
      const originalMethod = target[propertyKey!]
      target[propertyKey!] = (...args: any[]) => {
        args[parameterIndex] = validation.validate(args[parameterIndex])
        return originalMethod(...args)
      }
    } catch (error) {
      const err = (error as ZodError).errors[0]
      throw new BadRequestError(`${err.path.join('.')}: ${err.message}`)
    }
  }
}
