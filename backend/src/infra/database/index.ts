import { PgConnection } from './connections/pg-connection'
import { UserCodeRepository } from './repositories/user-code.repository'
import { UserRepository } from './repositories/user.repository'

export const connections = [
  {
    provide: 'Connection',
    useValue: PgConnection.instance,
  },
]

export const repositories = [UserRepository, UserCodeRepository]
