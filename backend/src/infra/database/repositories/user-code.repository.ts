import { Injectable } from '@infra/injection/injectable'
import { Repository } from './_repository'
import { Connection } from '@infra/database/interfaces/connection.interface'
import { ResolveParam } from '@infra/injection/resolve'
import { UserCode } from '@domain/entities/user-code.entity'

@Injectable()
export class UserCodeRepository extends Repository<UserCode> {
  constructor(@ResolveParam('Connection') connection: Connection) {
    super(UserCode, connection)
  }
}
