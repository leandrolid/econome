import { PgConnection } from '@infra/database/connections/pg-connection'
import { Context } from './context'
import { ClassLike } from '@infra/types/class-like.interface'

export const register = () => {
  Context.instance.set('Connection', PgConnection as unknown as ClassLike<PgConnection>)
}
register()
