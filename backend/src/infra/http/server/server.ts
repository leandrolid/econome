import { makeControllerToken } from '@infra/injection/injectable'
import * as express from 'express'
import { Server as ServerType } from 'http'
import { Controller } from '../interfaces/controller.interface'
import { HttpMessages } from '../interfaces/message.enum'
import { HttpStatusCode } from '../interfaces/status.enum'
import { resolve } from '@infra/injection/resolve'
import { HttpError } from '@domain/errors/http.error'
import { NotFoundError } from '@domain/errors/not-found.error'

export class Server {
  private readonly app: express.Express

  constructor(private readonly controllers: any[]) {
    this.app = express()
    this.app.use(express.json())
  }

  start(port: number): void {
    const server = this.app.listen(port, () => {
      console.log('Server is running')
    })
    this.gracefulShutdown(server)
  }

  private gracefulShutdown(server: ServerType): void {
    process.on('SIGINT', () => {
      server.close(() => {
        console.log('Server closed')
        process.exit(0)
      })
    })
    process.on('SIGTERM', () => {
      server.close(() => {
        console.log('Server closed')
        process.exit(0)
      })
    })
  }

  router(): void {
    this.app.use('*', (req, res) => {
      try {
        const controller = this.getController(req.method, req.baseUrl)
        return controller.execute(req, res)
      } catch (error) {
        console.error(error)
        if (error instanceof HttpError) {
          return res.status(error.statusCode).send(error)
        }
        return res
          .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
          .send(HttpMessages.INTERNAL_SERVER_ERROR())
      }
    })
  }

  private getController(method: string, path: string): Controller {
    try {
      return resolve<Controller>(makeControllerToken(method, path))
    } catch (error) {
      console.error(error)
      throw new NotFoundError('Route not found')
    }
  }
}
