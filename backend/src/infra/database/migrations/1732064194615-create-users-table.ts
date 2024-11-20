import { Connection } from '../interfaces/connection.interface'

export class CreateUsersTable1732064194615 {
  constructor(private readonly connection: Connection) {}

  async up() {
    await this.connection.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        deleted_at TIMESTAMP DEFAULT NULL
      )
    `)
  }

  async down() {
    await this.connection.query('DROP TABLE users')
  }
}
