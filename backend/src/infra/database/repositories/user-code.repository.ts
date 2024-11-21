import { Repository } from './_repository'
import { Connection } from '@infra/database/interfaces/connection.interface'
import { UserCode } from '@domain/entities/user-code.entity'
import { Inject, Injectable } from '@nestjs/common'
import { IUserCodeRepository } from '@domain/repositories/user-code.reporitory'

@Injectable()
export class UserCodeRepository extends Repository<UserCode> implements IUserCodeRepository {
  constructor(@Inject('Connection') connection: Connection) {
    super(UserCode, connection)
  }
}
