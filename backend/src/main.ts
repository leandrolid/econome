import 'dotenv/config'
import 'reflect-metadata'
import { Server } from './infra/http/server/server'
import { CreateUserController } from './infra/http/controllers/create-user.controller'

async function bootstrap() {
  const server = new Server([CreateUserController])
  server.router()
  server.start(Number(process.env.PORT || 3001))
}
bootstrap()
