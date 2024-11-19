import { HashService } from '@domain/services/hash.service'
import { randomBytes } from 'crypto'

export class CryptoHashService implements HashService {
  random(size: number): string {
    return randomBytes(Math.ceil(size / 2))
      .toString('hex')
      .toUpperCase()
  }
}
