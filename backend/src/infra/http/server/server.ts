import { makeControllerToken } from '@infra/injection/injectable'
import * as express from 'express'
import { Server as ServerType } from 'http'
import { Controller } from '../interfaces/controller.interface'
import { HttpMessages } from '../interfaces/message.enum'
import { HttpStatusCode } from '../interfaces/status.enum'
import { resolve } from '@infra/injection/resolve'

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
        const controller = resolve<Controller>(makeControllerToken(req.method, req.baseUrl))
        return controller.execute(req, res)
      } catch (error) {
        console.error(error)
        return res.status(HttpStatusCode.NOT_FOUND).send(
          HttpMessages.NOT_FOUND({
            message: 'Route not found',
          }),
        )
      }
    })
  }
}
