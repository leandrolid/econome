import { Injectable, Logger, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP')

  use(request: Request, response: Response, next: NextFunction) {
    response.on('finish', () => {
      const { method, originalUrl, headers, body } = request
      const bodyFormatted = JSON.stringify(body).replace(/\"buffer\":\{.*\}\,/g, '')

      const message = [
        method,
        originalUrl,
        response.statusCode,
        response.statusMessage,
        `\nAuthorization: ${headers.authorization}`,
        `\nBody: '${bodyFormatted}'`,
      ]

      if (response.statusCode >= 400) {
        return this.logger.error(message.join(' '))
      }

      return this.logger.log(message.slice(0, 4).join(' '))
    })

    next()
  }
}
