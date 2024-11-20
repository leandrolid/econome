import { DrizzleConnection } from './connections/drizzle.connection'
import { UserCodeRepository } from './repositories/user-code.repository'
import { UserRepository } from './repositories/user.repository'

export const connections = [
  {
    provide: 'Connection',
    useValue: DrizzleConnection.instance,
  },
]

export const repositories = [UserRepository, UserCodeRepository]
