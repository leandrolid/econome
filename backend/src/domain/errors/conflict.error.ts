import { HttpStatusCode } from '@infra/http/interfaces/status.enum'
import { HttpError } from './http.error'

export class ConflictError extends HttpError {
  constructor(message: string) {
    super(HttpStatusCode.CONFLICT, message)
    this.name = 'ConflictError'
  }
}
