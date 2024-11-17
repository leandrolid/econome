import { User } from '@domain/entities/user.entity'
import { Injectable } from '@infra/injection/injectable'
import { Repository } from './_repository'
import { Connection } from '../connections/pg-connection'

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(connection: Connection) {
    super(User, connection)
  }
}
