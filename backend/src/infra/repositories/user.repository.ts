import { User } from 'src/domain/entities/user.entity'
import { Connection } from '../database/connection'

export class UserRepository {
  constructor(private readonly connection: Connection) {}

  async createOne(data: Partial<User>): Promise<User> {
    const [{ id }] = await this.connection.query(
      `
      INSERT INTO users (email) VALUES ($1) RETURNING id
      `,
      [data.email],
    )
    return User.create({ ...data, id })
  }
}
