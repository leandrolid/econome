import { QueueService } from '@domain/services/queue.service'
import { EmailQueueInput } from './email-queue.input'
import { Injectable } from '@nestjs/common'
import { InjectQueue } from '@nestjs/bullmq'
import { Queue } from 'bullmq'

@Injectable()
export class EmailQueueService implements QueueService<EmailQueueInput> {
  constructor(@InjectQueue('emails') private readonly queue: Queue<EmailQueueInput>) {}

  async enqueue(data: EmailQueueInput): Promise<void> {
    await this.queue.add(data.template, data, {
      attempts: 3,
      backoff: {
        type: 'exponential',
        delay: 1000,
      },
    })
  }
}
