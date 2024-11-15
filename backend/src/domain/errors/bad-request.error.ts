import { HttpStatusCode } from '@infra/http/interfaces/status.enum'
import { HttpError } from './http.error'

export class BadRequestError extends HttpError {
  constructor(message: string) {
    super(HttpStatusCode.BAD_REQUEST, message)
    this.name = 'BadRequestError'
  }
}
