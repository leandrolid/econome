import { ClassLike } from '@infra/types/class-like.interface'
import { Module, ValueProvider } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { Server as ServerType } from 'http'

export class Server {
  private app: NestExpressApplication
  private readonly config: {
    imports: any[]
    controllers: any[]
    providers: any[]
  }

  constructor() {
    this.config = {
      imports: [],
      controllers: [],
      providers: [],
    }
  }

  async start(port: number): Promise<void> {
    @Module(this.config)
    class App {}
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

  injectables(injectables: Array<ClassLike<any> | ValueProvider>): this {
    this.config.providers.push(...injectables)
    return this
  }

  modules(modules: any[]): this {
    this.config.imports.push(...modules)
    return this
  }
}
