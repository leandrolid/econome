import { Injectable } from '@infra/injection/injectable'
import { CreateUserInput } from './create-user.input'
import { CreateUserOutput } from './create-user.output'
import { UserRepository } from '@infra/database/repositories/user.repository'
import { BadRequestError } from '@domain/errors/bad-request.error'
import { MailerService } from '@domain/services/mailer.service'
import { ResolveParam } from '@infra/injection/resolve'

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    @ResolveParam('MailerService')
    private readonly mailerService: MailerService,
  ) {}

  async execute(data: CreateUserInput): Promise<CreateUserOutput> {
    const isRegistered = await this.userRepository.exists({ email: data.email })
    if (isRegistered) throw new BadRequestError('Email already registered')
    const user = await this.userRepository.createOne({ email: data.email })
    await this.mailerService.send({
      to: user.email,
      subject: 'E-mail confirmation',
      template: 'confirmation-code',
      replacements: { code: '123456' },
    })
    return { user }
  }
}
