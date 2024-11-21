import { BadRequestError } from '@domain/errors/bad-request.error'
import { HttpError } from '@domain/errors/http.error'
import { ZodError } from 'zod'

export abstract class IValidation<T> {
  protected abstract transform(data: any): T

  public validate(data: any): T {
    try {
      return this.transform(data)
    } catch (error) {
      throw new BadRequestError(this.getError(error))
    }
  }

  private getError = (error: any): string => {
    if (error instanceof ZodError) {
      const firstError = error.errors[0]
      return `${firstError.path.join('.')}: ${firstError.message}`
    }
    if (error instanceof HttpError) {
      return error.message
    }
    console.error(error)
    return 'Erro desconhecido'
  }
}
