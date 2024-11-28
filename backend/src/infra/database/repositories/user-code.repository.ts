import { Repository } from './_repository'
import { UserCode } from '@domain/entities/user-code.entity'
import { Injectable } from '@nestjs/common'
import { IUserCodeRepository } from '@domain/repositories/user-code.reporitory'

@Injectable()
export class UserCodeRepository implements IUserCodeRepository {
  constructor(private readonly repository: Repository<UserCode>) {}

  async createOne(data: Partial<UserCode>): Promise<UserCode> {
    return this.repository.createOne(UserCode, data)
  }
}
