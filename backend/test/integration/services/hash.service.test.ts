import { IHashService } from '@domain/services/hash.service'
import { faker } from '@faker-js/faker'
import { CryptoHashService } from '@infra/services/hash/hash.service'
import { TestingModule, Test } from '@nestjs/testing'

describe('HashService', () => {
  let hashService: IHashService
  let app: TestingModule

  beforeEach(async () => {
    app = await Test.createTestingModule({
      providers: [
        {
          provide: IHashService,
          useClass: CryptoHashService,
        },
      ],
    }).compile()
    hashService = await app.resolve(IHashService)
  })

  afterEach(async () => {
    await app.close()
  })

  it('should generate a random hash', () => {
    const hash = hashService.random(faker.number.int({ min: 1, max: 10 }))
    expect(hash).toMatch(/\w+/)
  })

  it('should generate a random hash with fixed size', () => {
    const hash = hashService.random(10)
    expect(hash).toHaveLength(10)
  })
})
