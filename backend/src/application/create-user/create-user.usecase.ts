import { Injectable } from '@infra/injection/injectable'
import { CreateUserInput } from './create-user.input'
import { CreateUserOutput } from './create-user.output'
import { UserRepository } from '@infra/database/repositories/user.repository'
import { BadRequestError } from '@domain/errors/bad-request.error'
import { MailerService } from '@domain/services/mailer.service'
import { ResolveParam } from '@infra/injection/resolve'
import { HashService } from '@domain/services/hash.service'
import { UserCodeRepository } from '@infra/database/repositories/user-code.repository'

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userCodeRepository: UserCodeRepository,
    @ResolveParam('MailerService')
    private readonly mailerService: MailerService,
    @ResolveParam('HashService')
    private readonly hashService: HashService,
  ) {}

  async execute(data: CreateUserInput): Promise<CreateUserOutput> {
    try {
      await this.userRepository.startTransaction()
      const isRegistered = await this.userRepository.exists({ email: data.email })
      if (isRegistered) throw new BadRequestError('Email already registered')
      const user = await this.userRepository.createOne({ email: data.email })
      const userCode = await this.userCodeRepository.createOne({
        userId: user.id,
        code: this.hashService.random(6),
      })
      await this.mailerService.send({
        to: user.email,
        subject: 'E-mail confirmation',
        template: 'confirmation-code',
        replacements: { code: userCode.code },
      })
      await this.userRepository.commitTransaction()
      return { user, userCode }
    } catch (error) {
      await this.userRepository.rollbackTransaction()
      throw error
    }
  }
}
