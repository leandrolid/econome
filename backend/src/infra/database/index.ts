import { IUserCodeRepository } from '@domain/repositories/user-code.reporitory'
import { DrizzleConnection } from './connections/drizzle.connection'
import { UserCodeRepository } from './repositories/user-code.repository'
import { UserRepository } from './repositories/user.repository'
import { IUserRepository } from '@domain/repositories/user.repository'
import { Repository } from '@infra/database/repositories/_repository'

export const connections = [
  {
    provide: 'Connection',
    useValue: DrizzleConnection.instance,
  },
]

export const repositories = [
  Repository,
  {
    provide: IUserRepository,
    useClass: UserRepository,
  },
  {
    provide: IUserCodeRepository,
    useClass: UserCodeRepository,
  },
]
