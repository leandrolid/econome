import { Injectable } from '@infra/injection/injectable'
import { UserRepository } from '@infra/repositories/user.repository'
import { CreateUserInput } from './create-user.input'
import { CreateUserOutput } from './create-user.output'

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(data: CreateUserInput): Promise<CreateUserOutput> {
    const user = await this.userRepository.createOne({
      email: data.email,
    })
    return { user }
  }
}
