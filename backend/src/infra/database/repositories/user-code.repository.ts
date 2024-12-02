import { Repository } from './_repository'
import { UserCode } from '@domain/entities/user-code.entity'
import { Injectable } from '@nestjs/common'
import { IUserCodeRepository } from '@domain/repositories/user-code.repository'
import { IHashService } from '@domain/services/hash.service'

@Injectable()
export class UserCodeRepository implements IUserCodeRepository {
  constructor(
    private readonly repository: Repository<UserCode>,
    private readonly hashService: IHashService,
  ) {}

  async createOne(data: Partial<UserCode>): Promise<UserCode> {
    return this.repository.createOne(UserCode, data)
  }

  async isCodeValid({ userId, code }: { userId: number; code: string }): Promise<boolean> {
    return this.repository.exists(UserCode, { userId, code: await this.hashService.hash(code) })
  }
}
