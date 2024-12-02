import { ValidateCodeInput } from '@app/validate-code/validate-code.input'
import { ValidateCodeOutput } from '@app/validate-code/validate-code.output'
import { BadRequestError } from '@domain/errors/bad-request.error'
import { IUserCodeRepository } from '@domain/repositories/user-code.repository'
import { IUserRepository } from '@domain/repositories/user.repository'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ValidateCodeUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly userCodeRepository: IUserCodeRepository,
  ) {}
  async execute({ email, code }: ValidateCodeInput): Promise<ValidateCodeOutput> {
    const userId = await this.userRepository.getIdByEmail(email)
    const isCodeValid = await this.userCodeRepository.isCodeValid({ userId, code })
    if (!isCodeValid) {
      throw new BadRequestError('Código inválido')
    }
    return {
      token: 'any',
    }
  }
}
