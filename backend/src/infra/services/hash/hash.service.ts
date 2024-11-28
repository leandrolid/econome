import { IHashService } from '@domain/services/hash.service'
import { Injectable } from '@nestjs/common'
import { randomBytes } from 'node:crypto'

@Injectable()
export class CryptoHashService implements IHashService {
  random(size: number): string {
    return randomBytes(Math.ceil(size / 2))
      .toString('hex')
      .toUpperCase()
  }
}
