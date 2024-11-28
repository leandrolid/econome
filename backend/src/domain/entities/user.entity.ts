import { BaseEntity } from './_base.entity'

export class User extends BaseEntity {
  id: number
  email: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}
