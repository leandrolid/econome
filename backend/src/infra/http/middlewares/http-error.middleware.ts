import { HttpError } from '@domain/errors/http.error'
import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common'
import { Request, Response } from 'express'

@Catch(HttpError)
export class HttpErrorFilter implements ExceptionFilter {
  catch(error: HttpError, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()

    response.status(error.statusCode).json({
      statusCode: error.statusCode,
      message: error.message,
      path: request.url,
    })
  }
}
