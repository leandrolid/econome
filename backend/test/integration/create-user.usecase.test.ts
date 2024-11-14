import { CreateUserUseCase } from 'src/application/create-user/create-user.usecase'
import { Connection } from 'src/infra/database/connection'
import { UserRepository } from 'src/infra/repositories/user.repository'

describe('CreateUserUsecase', () => {
  let createUserUsecase: CreateUserUseCase
  let userRepository: UserRepository
  const connection = Connection.instance

  beforeEach(() => {
    userRepository = new UserRepository(connection)
    createUserUsecase = new CreateUserUseCase(userRepository)
  })

  afterEach(async () => {
    await connection.query('DELETE FROM users', [])
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should create a user', async () => {
    const { user } = await createUserUsecase.execute({
      email: 'any_email',
    })

    expect(user).toMatchObject(
      expect.objectContaining({
        id: expect.any(Number),
        email: 'any_email',
      }),
    )
  })
})
