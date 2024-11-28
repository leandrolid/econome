import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const userSchema = pgTable('users', {
  id: serial().primaryKey(),
  email: text().notNull().unique(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
  deletedAt: timestamp(),
})
