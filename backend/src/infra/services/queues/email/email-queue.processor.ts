import { NodeMailerService } from '@infra/services/emails/mailers/node-mailer.service'
import { EmailQueueInput } from './email-queue.input'
import { MailerOutput } from '@domain/services/mailer.service'
import { Job } from 'bullmq'
import { Processor, WorkerHost } from '@nestjs/bullmq'

@Processor('emails')
export class EmailQueueProcessor extends WorkerHost {
  constructor(private readonly mailerService: NodeMailerService) {
    super()
  }

  async process(job: Job<EmailQueueInput>): Promise<MailerOutput> {
    const { to, subject, template, replacements } = job.data
    return this.mailerService.send({ to, subject, template, replacements })
  }
}
