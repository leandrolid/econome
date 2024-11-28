import { Entity } from '@infra/database/decorators/entity.decorator'
import { BaseEntity } from './_base.entity'

@Entity('user_codes')
export class UserCode extends BaseEntity {
  id: number
  userId: number
  code: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}
