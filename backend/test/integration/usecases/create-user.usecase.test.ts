import { CreateUserUseCase } from '@app/create-user/create-user.usecase'
import { faker } from '@faker-js/faker'
import { PgConnection } from '@infra/database/connections/pg-connection'
import { Connection } from '@infra/database/interfaces/connection.interface'
import { UserCodeRepository } from '@infra/database/repositories/user-code.repository'
import { UserRepository } from '@infra/database/repositories/user.repository'
import { NodeMailerService } from '@infra/emails/mailers/node-mailer.service'
import { EmailQueueService } from '@infra/queues/email-queue/email-queue.service'
import { CryptoHashService } from '@infra/text/hash/hash.service'
import { Test, TestingModule } from '@nestjs/testing'

describe('CreateUserUsecase', () => {
  let createUserUsecase: CreateUserUseCase
  let app: TestingModule
  let connection: Connection

  beforeEach(async () => {
    app = await Test.createTestingModule({
      providers: [
        CreateUserUseCase,
        UserRepository,
        UserCodeRepository,
        EmailQueueService,
        CryptoHashService,
        {
          provide: NodeMailerService,
          useValue: new NodeMailerService({
            host: process.env.TEST_EMAIL_HOST,
            port: parseInt(process.env.TEST_EMAIL_PORT!),
            from: process.env.TEST_EMAIL_FROM,
            auth: {
              user: process.env.TEST_EMAIL_USER,
              pass: process.env.TEST_EMAIL_PASSWORD,
            },
          }),
        },
        {
          provide: 'Connection',
          useValue: PgConnection.instance,
        },
      ],
    }).compile()
    createUserUsecase = await app.resolve(CreateUserUseCase)
    connection = await app.resolve('Connection')
  })

  afterEach(async () => {
    await connection.query('DELETE FROM users')
    await connection.query('DELETE FROM user_codes')
    await app.close()
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
