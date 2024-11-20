import { BullModule } from '@nestjs/bullmq'
import { BullBoardModule } from '@bull-board/nestjs'
import { ExpressAdapter } from '@bull-board/express'
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter'

const getBoards = () => {
  if (process.env.NODE_ENV === 'production') return []
  return [
    BullBoardModule.forRoot({ route: 'queues', adapter: ExpressAdapter }),
    BullBoardModule.forFeature({ name: 'emails', adapter: BullMQAdapter }),
  ]
}

export const bullModule = [
  BullModule.forRoot({
    connection: {
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
    },
  }),
  BullModule.registerQueue({ name: 'emails' }),
  ...getBoards(),
]
