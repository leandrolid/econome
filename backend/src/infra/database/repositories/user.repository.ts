import { User } from '@domain/entities/user.entity'
import { Injectable } from '@infra/injection/injectable'
import { Repository } from './_repository'
import { Connection } from '@infra/database/interfaces/connection.interface'
import { ResolveParam } from '@infra/injection/resolve'

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(@ResolveParam('Connection') connection: Connection) {
    super(User, connection)
  }
}
