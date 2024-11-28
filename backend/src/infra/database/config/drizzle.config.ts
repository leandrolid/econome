import { Config } from 'drizzle-kit'

const config: Config = {
  dbCredentials: {
    url: `${process.env.DB_URL}`,
  },
  dialect: 'postgresql',
  casing: 'snake_case',
  out: 'src/infra/database/migrations',
  schema: 'src/infra/database/schemas/*.ts',
}

export default config
