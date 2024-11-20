import 'dotenv/config'

import { Server } from './infra/http/server/server'
import { ConfigModule } from '@nestjs/config'
import { services } from '@infra/services'
import { connections, repositories } from '@infra/database'
import { controllers, middlewares, validations } from '@infra/http'
import { usecases } from './application'

async function bootstrap() {
  const server = new Server()
  server
    .modules([
      ConfigModule.forRoot({
        isGlobal: true,
      }),
    ])
    .injectables([...connections, ...repositories, ...services, ...validations, ...usecases])
    .controllers([...controllers])
    .middlewares([...middlewares])
  await server.start(Number(process.env.PORT || 3001))
}
bootstrap()
