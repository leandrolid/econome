import { User } from '@domain/entities/user.entity'
import { Repository } from './_repository'
import { Connection } from '@infra/database/interfaces/connection.interface'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(@Inject('Connection') connection: Connection) {
    super(User, connection)
  }
}
