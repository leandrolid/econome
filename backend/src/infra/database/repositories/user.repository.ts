import { User } from '@domain/entities/user.entity'
import { Repository } from './_repository'
import { Connection } from '@infra/database/interfaces/connection.interface'
import { Inject, Injectable } from '@nestjs/common'
import { IUserRepository } from '@domain/repositories/user.repository'

@Injectable()
export class UserRepository extends Repository<User> implements IUserRepository {
  constructor(@Inject('Connection') connection: Connection) {
    super(User, connection)
  }
}
