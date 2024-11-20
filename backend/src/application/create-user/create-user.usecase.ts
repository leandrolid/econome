import { CreateUserInput } from './create-user.input'
import { CreateUserOutput } from './create-user.output'
import { UserRepository } from '@infra/database/repositories/user.repository'
import { BadRequestError } from '@domain/errors/bad-request.error'
import { UserCodeRepository } from '@infra/database/repositories/user-code.repository'
import { CryptoHashService } from '@infra/services/hash/hash.service'
import { EmailQueueService } from '@infra/services/queues/email/email-queue.service'
import { Injectable } from '@nestjs/common'
import { Transaction } from '@infra/database/decorators/transaction.decorator'

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userCodeRepository: UserCodeRepository,
    private readonly emailQueueService: EmailQueueService,
    private readonly hashService: CryptoHashService,
  ) {}

  @Transaction('Error creating user')
  async execute(data: CreateUserInput): Promise<CreateUserOutput> {
    const isRegistered = await this.userRepository.exists({ email: data.email })
    if (isRegistered) throw new BadRequestError('Email already registered')
    const user = await this.userRepository.createOne({ email: data.email })
    const userCode = await this.userCodeRepository.createOne({
      userId: user.id,
      code: this.hashService.random(6),
    })
    await this.emailQueueService.enqueue({
      to: user.email,
      subject: 'E-mail confirmation',
      template: 'confirmation-code',
      replacements: { code: userCode.code },
    })
    return { user, userCode }
  }
}
