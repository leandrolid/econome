import { EmailQueueInput } from './email-queue.input'
import { IEmailOutput, IEmailService } from '@domain/services/email.service'
import { Job } from 'bullmq'
import { Processor, WorkerHost } from '@nestjs/bullmq'

@Processor('emails')
export class EmailQueueProcessor extends WorkerHost {
  constructor(private readonly mailerService: IEmailService) {
    super()
  }

  async process(job: Job<EmailQueueInput>): Promise<IEmailOutput> {
    const { to, subject, template, replacements } = job.data
    return this.mailerService.send({ to, subject, template, replacements })
  }
}
