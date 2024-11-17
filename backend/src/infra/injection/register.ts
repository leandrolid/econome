import { Connection } from '@infra/database/connections/pg-connection'
import { Context } from './context'

export const register = () => {
  Context.instance.set(Connection.name, Connection as any)
}
register()
