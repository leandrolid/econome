import { CreateUserInput } from './create-user.input'
import { CreateUserOutput } from './create-user.output'
import { BadRequestError } from '@domain/errors/bad-request.error'
import { Injectable } from '@nestjs/common'
import { Transaction } from '@infra/database/decorators/transaction.decorator'
import { IQueueService } from '@domain/services/queue.service'
import { IEmailConfig } from '@domain/services/email.service'
import { IHashService } from '@domain/services/hash.service'
import { IUserRepository } from '@domain/repositories/user.repository'
import { IUserCodeRepository } from '@domain/repositories/user-code.reporitory'

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly userCodeRepository: IUserCodeRepository,
    private readonly emailQueueService: IQueueService<IEmailConfig>,
    private readonly hashService: IHashService,
  ) {}

  @Transaction({ errorMessage: 'Erro ao criar usuário' })
  async execute(data: CreateUserInput): Promise<CreateUserOutput> {
    const isRegistered = await this.userRepository.isEmailRegistered(data.email)
    if (isRegistered) throw new BadRequestError('E-mail já cadastrado')
    const user = await this.userRepository.createOne({ email: data.email })
    const userCode = await this.userCodeRepository.createOne({
      userId: user.id,
      code: this.hashService.random(6),
    })
    await this.emailQueueService.enqueue({
      to: user.email,
      subject: 'Confirmação de e-mail',
      template: 'confirmation-code',
      replacements: { code: userCode.code },
    })
    return { user, userCode }
  }
}
