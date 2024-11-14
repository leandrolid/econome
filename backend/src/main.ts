import 'dotenv/config'
import 'reflect-metadata'
import { Server } from './infra/http/implementations/server'
import { CreateUserController } from './infra/http/implementations/create-user.controller'

async function bootstrap() {
  const server = new Server([CreateUserController])
  server.requests()
  server.start(Number(process.env.PORT || 3001))
}
bootstrap()
