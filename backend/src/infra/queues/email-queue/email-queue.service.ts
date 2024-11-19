import { QueueService } from '@domain/services/queue.service'
import * as Queue from 'bull'
import { EmailQueueInput } from './email-queue.input'
import { Injectable } from '@infra/injection/injectable'
import { ResolveParam } from '@infra/injection/resolve'
import { MailerService } from '@domain/services/mailer.service'

@Injectable()
export class EmailQueueService implements QueueService<EmailQueueInput> {
  private readonly queue: Queue.Queue<EmailQueueInput>

  constructor(
    @ResolveParam('MailerService')
    private readonly mailerService: MailerService,
  ) {
    this.queue = new Queue(EmailQueueService.name, {
      redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
      },
    })
    this.process()
  }

  async enqueue(data: EmailQueueInput): Promise<void> {
    await this.queue.add(data, {
      attempts: 3,
      backoff: {
        type: 'exponential',
        delay: 1000,
      },
    })
  }

  async process() {
    await this.queue.process(async (job: Queue.Job<EmailQueueInput>, done) => {
      const { to, subject, template, replacements } = job.data
      const res = await this.mailerService.send({ to, subject, template, replacements })
      done(null, res)
    })
  }

  getQueue(): Queue.Queue<EmailQueueInput> {
    return this.queue
  }
}
