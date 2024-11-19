import { HashService } from '@domain/services/hash.service'
import { resolve } from '@infra/injection/resolve'
import { faker } from '@faker-js/faker'

describe('HashService', () => {
  let hashService: HashService

  beforeEach(async () => {
    hashService = resolve('HashService')
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
