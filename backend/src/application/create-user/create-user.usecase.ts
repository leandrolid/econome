import { Injectable } from '@infra/injection/injectable'
import { CreateUserInput } from './create-user.input'
import { CreateUserOutput } from './create-user.output'
import { UserRepository } from '@infra/database/repositories/user.repository'

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
