import { UserCode } from '@domain/entities/user-code.entity'
import { IRepository } from './_repository'

export abstract class IUserCodeRepository extends IRepository<UserCode> {}
