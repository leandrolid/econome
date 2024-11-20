import { EmailQueueService } from '@infra/services/queues/email/email-queue.service'
import { CryptoHashService } from '@infra/services/hash/hash.service'
import { NodeMailerService } from '@infra/services/emails/mailers/node-mailer.service'
import { EmailQueueProcessor } from './queues/email/email-queue.processor'

export const services = [
  NodeMailerService,
  EmailQueueService,
  EmailQueueProcessor,
  CryptoHashService,
]
