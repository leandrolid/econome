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

  controllers(controllers: ClassLike<any>[]): this {
    this.config.controllers = controllers
    return this
  }

  injectables(injectables: Array<ClassLike<any> | ValueProvider>): this {
    this.config.providers = injectables
    return this
  }

  modules(modules: ClassLike<any>[]): this {
    this.config.imports = modules
    return this
  }
}
