import { bigint, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const userCodeSchema = pgTable('user_codes', {
  id: serial().primaryKey().notNull(),
  userId: bigint({ mode: 'number' }).notNull(),
  code: text().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
  deletedAt: timestamp(),
})
