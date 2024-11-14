import { Entity } from 'src/infra/database/entity'
import { DataClass } from '../adapters/data-class'
import { Column } from 'src/infra/database/column'

@Entity('users')
export class User extends DataClass {
  @Column({ name: 'id' })
  id: number

  @Column({ name: 'email' })
  email: string
}
