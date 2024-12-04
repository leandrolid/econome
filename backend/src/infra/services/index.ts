import { EmailQueueService } from '@infra/services/queues/email/email-queue.service'
import { CryptoHashService } from '@infra/services/hash/hash.service'
import { NodeMailerService } from '@infra/services/emails/mailers/node-mailer.service'
import { EmailQueueProcessor } from './queues/email/email-queue.processor'
import { IQueueService } from '@domain/services/queue.service'
import { IEmailConfig, IEmailService } from '@domain/services/email.service'
import { IHashService } from '@domain/services/hash.service'
import { ITokenService } from '@domain/services/token.service'
import { JwtTokenService } from '@infra/services/token/token.service'

export const services = [
  {
    provide: IEmailService,
    useClass: NodeMailerService,
  },
  {
    provide: IQueueService<IEmailConfig>,
    useClass: EmailQueueService,
  },
  EmailQueueProcessor,
  {
    provide: IHashService,
    useClass: CryptoHashService,
  },
  {
    provide: ITokenService,
    useClass: JwtTokenService,
  },
]
