import { Client } from './_migrations'

export class CreateUsersTable1732064194615 {
  constructor(private readonly client: Client) {}

  async up() {
    await this.client.query(`
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
    await this.client.query('DROP TABLE users')
  }
}
