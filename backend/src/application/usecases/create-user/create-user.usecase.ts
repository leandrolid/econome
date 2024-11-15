import { Injectable } from '@infra/injection/injectable'
import { UserRepository } from '@infra/repositories/user.repository'
import { CreateUserInput } from './create-user.input'
import { CreateUserOutput } from './create-user.output'
import { Validate } from '@infra/validations/interfaces/validate'
import { CreateUserValidation } from '@infra/validations/implementations/create-user.validation'

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(@Validate(CreateUserValidation) data: CreateUserInput): Promise<CreateUserOutput> {
    const user = await this.userRepository.createOne({
      email: data.email,
    })
    return { user }
  }
}
