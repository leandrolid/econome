import { Client } from './_migrations'

export class CreateUserCodesTable1732066559664 {
  constructor(private readonly client: Client) {}

  async up() {
    await this.client.query(`
      CREATE TABLE user_codes (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        code TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        deleted_at TIMESTAMP DEFAULT NULL
      )
    `)
  }

  async down() {
    await this.client.query('DROP TABLE user_codes')
  }
}
