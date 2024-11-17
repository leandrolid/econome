import { CreateUserUseCase } from '@app/create-user/create-user.usecase'
import { Connection } from '@infra/database/connections/pg-connection'
import { resolve } from '@infra/injection/resolve'

describe('CreateUserUsecase', () => {
  let createUserUsecase: CreateUserUseCase

  beforeEach(() => {
    createUserUsecase = resolve(CreateUserUseCase.name)
  })

  afterEach(async () => {
    await Connection.instance.query('DELETE FROM users', [])
  })

  afterAll(async () => {
    await Connection.instance.destroy()
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
