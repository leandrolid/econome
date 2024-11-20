import { Column } from '@infra/database/decorators/column.decorator'
import { Entity } from '@infra/database/decorators/entity.decorator'
import { BaseEntity } from './_base.entity'

@Entity('user_codes')
export class UserCode extends BaseEntity {
  @Column({ name: 'id', type: 'bigint', generated: true })
  id: number

  @Column({ name: 'user_id', type: 'integer' })
  userId: number

  @Column({ name: 'code', type: 'text' })
  code: string

  @Column({ name: 'created_at', default: 'NOW()', type: 'timestamp' })
  createdAt: Date

  @Column({ name: 'updated_at', default: 'NOW()', type: 'timestamp' })
  updatedAt: Date

  @Column({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date
}
