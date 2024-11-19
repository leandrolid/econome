import { HashService } from '@domain/services/hash.service'
import { Injectable } from '@infra/injection/injectable'
import { randomBytes } from 'crypto'

@Injectable()
export class CryptoHashService implements HashService {
  random(size: number): string {
    return randomBytes(Math.ceil(size / 2))
      .toString('hex')
      .toUpperCase()
  }
}
