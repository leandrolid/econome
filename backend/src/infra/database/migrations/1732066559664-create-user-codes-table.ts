import { Connection } from '../interfaces/connection.interface'

export class CreateUserCodesTable1732066559664 {
  constructor(private readonly connection: Connection) {}

  async up() {
    await this.connection.query(`
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
    await this.connection.query('DROP TABLE user_codes')
  }
}
