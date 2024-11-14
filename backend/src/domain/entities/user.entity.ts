import { Entity } from 'src/infra/database/entity'
import { DataClass } from '../adapters/data-class'
import { Column } from 'src/infra/database/column'

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
