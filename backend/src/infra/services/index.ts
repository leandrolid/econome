import { EmailQueueService } from '@infra/services/queues/email/email-queue.service'
import { CryptoHashService } from '@infra/services/hash/hash.service'
import { NodeMailerService } from '@infra/services/emails/mailers/node-mailer.service'

export const services = [NodeMailerService, EmailQueueService, CryptoHashService]
