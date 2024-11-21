import { ClassLike } from '@infra/types/class-like.interface'
import {
  ClassProvider,
  MiddlewareConsumer,
  Module,
  NestModule,
  ValueProvider,
} from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { Server as ServerType } from 'http'

export class Server {
  private app: NestExpressApplication
  private readonly config: {
    imports: any[]
    controllers: any[]
    providers: any[]
    middlewares: any[]
  }

  constructor() {
    this.config = {
      imports: [],
      controllers: [],
      providers: [],
      middlewares: [],
    }
  }

  async start(port: number): Promise<void> {
    const { middlewares, ...config } = this.config
    @Module(config)
    class App implements NestModule {
      configure = (consumer: MiddlewareConsumer) => {
        return consumer.apply(...middlewares).forRoutes('*')
      }
    }
    this.app = await NestFactory.create<NestExpressApplication>(App)
    this.app.enableCors()
    const server = await this.app.listen(port)
    this.gracefulShutdown(server)
  }

  private gracefulShutdown(server: ServerType): void {
    process.on('SIGINT', () => {
      server.close(() => {
        process.exit(0)
      })
    })
    process.on('SIGTERM', () => {
      server.close(() => {
        process.exit(0)
      })
    })
  }

  controllers(controllers: ClassLike<any>[]): this {
    this.config.controllers.push(...controllers)
    return this
  }

  injectables(injectables: Array<ClassLike<any> | ValueProvider | ClassProvider>): this {
    this.config.providers.push(...injectables)
    return this
  }

  modules(modules: any[]): this {
    this.config.imports.push(...modules)
    return this
  }

  middlewares(middlewares: ClassLike<any>[]): this {
    this.config.middlewares.push(...middlewares)
    return this
  }
}
