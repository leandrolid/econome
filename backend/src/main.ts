import 'dotenv/config'

import { Server } from './infra/http/server/server'
import { ConfigModule } from '@nestjs/config'
import { services } from '@infra/services'
import { connections, repositories } from '@infra/database'
import { controllers, validations } from '@infra/http'
import { usecases } from './application'

async function bootstrap() {
  const server = new Server()
  server.modules([
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ])
  server.injectables([...connections, ...repositories, ...services, ...validations, ...usecases])
  server.controllers([...controllers])
  await server.start(Number(process.env.PORT || 3001))
}
bootstrap()
