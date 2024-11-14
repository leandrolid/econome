import { User } from 'src/domain/entities/user.entity'
import { Connection } from '../database/connection'

export class UserRepository {
  constructor(private readonly connection: Connection) {}

  async createOne(data: Partial<User>): Promise<User> {
    const [user] = await this.connection.insertInto(User, data)
    return User.create(user)
  }
}
