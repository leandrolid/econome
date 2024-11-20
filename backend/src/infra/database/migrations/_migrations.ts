import { Logger } from '@nestjs/common'
import * as fs from 'fs'
import * as path from 'path'

export type Client = {
  query: (sql: string, values?: any[]) => Promise<any[]>
}

const logger = new Logger('Migrations')

export const runMigrations = async (client: Client) => {
  try {
    logger.debug('Running migrations...')
    await client.query('BEGIN')
    const migrationsName = await getMigrationsName(client)
    const dirPath = path.join(__dirname, '.')
    const { instances } = await importAndInstantiateClasses(dirPath, client)
    await Promise.all(
      instances
        .filter((instance) => !migrationsName.includes(instance.constructor.name))
        .map(async (instance) => {
          await instance.up()
          await client.query(
            `
            INSERT INTO migrations (timestamp, name)
            VALUES ($1, $2)
          `,
            [instance.filename.split('-').at(0), instance.constructor.name],
          )
        }),
    )

    await client.query('COMMIT')
  } catch (error) {
    await client.query('ROLLBACK')
    throw error
  }
}

const getMigrationsName = async (client: Client) => {
  await client.query(
    `
    CREATE TABLE IF NOT EXISTS migrations (
      id SERIAL PRIMARY KEY,
      timestamp BIGINT NOT NULL,
      name TEXT NOT NULL
    )
    `,
  )
  const migrations = await client.query('SELECT * FROM migrations')
  return migrations.map((migration) => migration.name)
}

export const importAndInstantiateClasses = async (dir: string, client: Client) => {
  const instances: Array<{
    up: () => Promise<void>
    down: () => Promise<void>
    filename: string
  }> = []
  const files = fs.readdirSync(dir)
  for (const file of files) {
    if (/^\d*?-/.test(file)) {
      const filePath = path.join(dir, file)
      // @ts-ignore - dynamic import
      const module = await import(filePath)
      for (const key in module) {
        if (typeof module[key] === 'function') {
          const instance = new module[key](client)
          instance.filename = file
          instances.push(instance)
        }
      }
    }
  }
  return { instances }
}
