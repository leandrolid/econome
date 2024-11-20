import { Server } from './infra/http/server/server'
import { CreateUserController } from '@infra/http/controllers/create-user.controller'
import { CreateUserUseCase } from '@app/create-user/create-user.usecase'
import { UserRepository } from '@infra/database/repositories/user.repository'
import { UserCodeRepository } from '@infra/database/repositories/user-code.repository'
import { PgConnection } from '@infra/database/connections/pg-connection'
import { EmailQueueService } from '@infra/queues/email-queue/email-queue.service'
import { CryptoHashService } from '@infra/text/hash/hash.service'
import { NodeMailerService } from '@infra/emails/mailers/node-mailer.service'
import { CreateUserValidation } from '@infra/validations/validations/create-user.validation'
import { ConfigModule } from '@nestjs/config'

async function bootstrap() {
  const server = new Server()
  server.modules([ConfigModule.forRoot()])
  server.injectables([
    {
      provide: 'Connection',
      useValue: PgConnection.instance,
    },
    UserRepository,
    UserCodeRepository,
    NodeMailerService,
    EmailQueueService,
    CryptoHashService,
    CreateUserValidation,
    CreateUserUseCase,
  ])
  server.controllers([CreateUserController])
  await server.start(Number(process.env.PORT || 3001))
}
bootstrap()
