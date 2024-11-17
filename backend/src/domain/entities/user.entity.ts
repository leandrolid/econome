import { DataClass } from '@domain/adapters/data-class'
import { Column } from '@infra/database/decorators/column.decorator'
import { Entity } from '@infra/database/decorators/entity.decorator'

@Entity('users')
export class User extends DataClass {
  @Column({ name: 'id', generated: true })
  id: number

  @Column({ name: 'email', type: 'text' })
  email: string

  @Column({ name: 'created_at', default: 'NOW()', type: 'timestamp' })
  createdAt: Date

  @Column({ name: 'updated_at', default: 'NOW()', type: 'timestamp' })
  updatedAt: Date

  @Column({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date
}
