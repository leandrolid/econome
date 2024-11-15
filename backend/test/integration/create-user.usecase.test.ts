import { CreateUserUseCase } from '@app/usecases/create-user/create-user.usecase'
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
      email: 'any@email.com',
    })

    expect(user).toMatchObject(
      expect.objectContaining({
        id: expect.any(Number),
        email: 'any@email.com',
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
        deletedAt: null,
      }),
    )
  })
})
