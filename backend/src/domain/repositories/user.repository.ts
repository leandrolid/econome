import { User } from '@domain/entities/user.entity'
import { IRepository } from './_repository'

export abstract class IUserRepository extends IRepository<User> {}
