import { User } from '@domain/entities/user.entity'
import { Connection } from '@infra/database/connection'
import { Repository } from '@infra/database/repository'
import { Injectable } from '@infra/injection/injectable'

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(connection: Connection) {
    super(User, connection)
  }
}
