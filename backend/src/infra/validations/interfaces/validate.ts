import { ZodError } from 'zod'
import { Validation } from './validation'
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
        const data = validation.validate(args[parameterIndex])
        return originalMethod(
          ...args
            .slice(0, parameterIndex)
            .concat(data)
            .concat(args.slice(parameterIndex + 1)),
        )
      }
    } catch (error) {
      const err = (error as ZodError).errors[0]
      throw new BadRequestError(`${err.path.join('.')}: ${err.message}`)
    }
  }
}
