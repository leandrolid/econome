import { ValidateCodeUseCase } from '@app/validate-code/validate-code.usecase'
import { faker } from '@faker-js/faker/.'
import { repositories } from '@infra/database'
import { DrizzleConnection } from '@infra/database/connections/drizzle.connection'
import { Connection } from '@infra/database/interfaces/connection.interface'
import { services } from '@infra/services'
import { bullModule } from '@infra/services/queues'
import { Test, TestingModule } from '@nestjs/testing'

describe('ValidateCodeUseCase', () => {
  let validateCodeUseCase: ValidateCodeUseCase
  let app: TestingModule
  let connection: Connection

  beforeEach(async () => {
    app = await Test.createTestingModule({
      imports: [...bullModule],
      providers: [
        ValidateCodeUseCase,
        ...repositories,
        ...services,
        {
          provide: 'Connection',
          useValue: DrizzleConnection.instance,
        },
      ],
    }).compile()
    validateCodeUseCase = await app.resolve(ValidateCodeUseCase)
    connection = await app.resolve('Connection')
  })

  afterEach(async () => {
    await connection.query('DELETE FROM users')
    await connection.query('DELETE FROM user_codes')
    await app.close()
  })

  it('should return a token if the code is valid', async () => {
    const {
      rows: [user],
    } = await connection.query('INSERT INTO users (email) VALUES ($1) RETURNING *', [
      faker.internet.email(),
    ])
    const {
      rows: [userCode],
    } = await connection.query(
      'INSERT INTO user_codes (user_id, code) VALUES ($1, $2) RETURNING *',
      [user.id, '123456'],
    )
    const output = await validateCodeUseCase.execute({ code: userCode.code, email: user.email })
    expect(output.token).toStrictEqual(expect.any(String))
  })
})
