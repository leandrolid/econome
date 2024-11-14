import { User } from 'src/domain/entities/user.entity'

export class UserRepository {
  constructor(private readonly connection: any) {}

  async insertInto(data: Partial<User>): Promise<User> {
    const user = User.create(data)
    const [id] = await this.connection.query(
      'INSERT INTO users SET ? RETURNING id',
      user,
    )
    return user.copy({ id })
  }
}
