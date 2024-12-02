import { User } from '@domain/entities/user.entity'
import { Repository } from './_repository'
import { Injectable } from '@nestjs/common'
import { IUserRepository } from '@domain/repositories/user.repository'

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly repository: Repository<User>) {}

  async createOne(data: Partial<User>): Promise<User> {
    return this.repository.createOne(User, data)
  }

  async isEmailRegistered(email: string): Promise<boolean> {
    return this.repository.exists(User, { email })
  }

  async getIdByEmail(email: string): Promise<number> {
    return this.repository.getId(User, { email })
  }
}
