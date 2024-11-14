import { User } from 'src/domain/entities/user.entity'
import { Connection } from '../database/connection'
import { Repository } from '../database/repository'

export class UserRepository extends Repository<User> {
  constructor(connection: Connection) {
    super(User, connection)
  }
}
