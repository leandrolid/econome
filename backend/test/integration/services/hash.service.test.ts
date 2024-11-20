import { HashService } from '@domain/services/hash.service'
import { faker } from '@faker-js/faker'
import { CryptoHashService } from '@infra/text/hash/hash.service'
import { TestingModule, Test } from '@nestjs/testing'

describe('HashService', () => {
  let hashService: HashService
  let app: TestingModule

  beforeEach(async () => {
    app = await Test.createTestingModule({
      providers: [CryptoHashService],
    }).compile()
    hashService = await app.resolve(CryptoHashService)
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
