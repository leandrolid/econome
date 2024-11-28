import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const userSchema = pgTable('users', {
  id: serial().primaryKey().notNull(),
  email: text().notNull().unique(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
  deletedAt: timestamp(),
})
