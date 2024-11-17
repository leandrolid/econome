import { HttpStatusCode } from '@infra/http/interfaces/status.enum'
import { HttpError } from './http.error'

export class NotFoundError extends HttpError {
  constructor(message: string) {
    super(HttpStatusCode.NOT_FOUND, message)
    this.name = 'NotFoundError'
  }
}
