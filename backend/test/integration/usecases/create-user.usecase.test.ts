import { CreateUserUseCase } from '@app/create-user/create-user.usecase'
import { faker } from '@faker-js/faker'
import { Connection } from '@infra/database/interfaces/connection.interface'
import { resolve } from '@infra/injection/resolve'

describe('CreateUserUsecase', () => {
  let createUserUsecase: CreateUserUseCase
  const connection: Connection = resolve('Connection')

  beforeEach(() => {
    createUserUsecase = resolve(CreateUserUseCase.name)
  })

  afterEach(async () => {
    await connection.query('DELETE FROM users')
    await connection.query('DELETE FROM user_codes')
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should create a user', async () => {
    const { user } = await createUserUsecase.execute({
      email: 'any@email.com',
    })
    expect(user).toMatchObject({
      id: expect.any(Number),
      email: 'any@email.com',
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
      deletedAt: null,
    })
  })

  it('should not create a duplicated user', async () => {
    await createUserUsecase.execute({ email: 'any@email.com' })

    await expect(() => createUserUsecase.execute({ email: 'any@email.com' })).rejects.toThrow(
      'Email already registered',
    )
  })

  it('should send a confirmation code to the user', async () => {
    const { userCode } = await createUserUsecase.execute({
      email: faker.internet.email(),
    })
    expect(userCode).toMatchObject({
      userId: expect.any(Number),
      code: expect.any(String),
    })
  })
})
