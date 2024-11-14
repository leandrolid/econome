import { UserRepository } from 'src/infra/repositories/user.repository'
import { CreateUserInput } from './create-user.input'
import { CreateUserOutput } from './create-user.output'

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(data: CreateUserInput): Promise<CreateUserOutput> {
    const user = await this.userRepository.createOne(data)
    return { user }
  }
}
