import { CreateUserUseCase } from 'src/application/create-user/create-user.usecase'
import { UserRepository } from 'src/infra/repositories/user.repository'

describe('CreateUserUsecase', () => {
  let createUserUsecase: CreateUserUseCase
  let userRepository: UserRepository
  const connection = {
    query: jest.fn().mockResolvedValue([1]),
  }

  beforeEach(() => {
    userRepository = new UserRepository(connection)
    createUserUsecase = new CreateUserUseCase(userRepository)
  })

  it('should create a user', async () => {
    const { user } = await createUserUsecase.execute({
      email: 'any_email',
    })

    expect(user.id).toBe(1)
    expect(user.email).toBe('any_email')
  })
})
