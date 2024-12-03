import { ITokenService } from '@domain/services/token.service'
import { JwtTokenService } from '@infra/services/token/token.service'
import { Test, TestingModule } from '@nestjs/testing'

describe('TokenService', () => {
  let tokenService: ITokenService
  let app: TestingModule

  beforeEach(async () => {
    app = await Test.createTestingModule({
      providers: [
        {
          provide: ITokenService,
          useClass: JwtTokenService,
        },
      ],
    }).compile()
    tokenService = await app.resolve(ITokenService)
  })

  afterEach(async () => {
    await app.close()
  })

  it('should decode a token', () => {
    const output = tokenService.decode({
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW55IE5hbWUifQ.yyMxHOQDxzgFc1Al8edEaZYPqLIw2uwBa-oVIA_TWsY',
    })
    expect(output).toStrictEqual({ name: 'Any Name' })
  })

  it('should create a token', () => {
    const output = tokenService.create({ payload: { id: 1 } })
    expect(output).toMatch(/\w+/)
    expect(tokenService.decode({ token: output })).toStrictEqual({
      id: 1,
      exp: expect.any(Number),
      iat: expect.any(Number),
    })
  })

  it('should create a token with correct expiration', () => {
    jest.spyOn(Date, 'now').mockReturnValue(0)
    const output = tokenService.create({ payload: { id: 1 }, expiresIn: '1h' })
    const payload = tokenService.decode({ token: output })
    expect(payload.exp).toBe(3600)
  })

  it('should create a token with default expiration', () => {
    jest.spyOn(Date, 'now').mockReturnValue(0)
    const output = tokenService.create({ payload: { id: 1 } })
    const payload = tokenService.decode({ token: output })
    expect(payload.exp).toBe(604800)
  })
})
