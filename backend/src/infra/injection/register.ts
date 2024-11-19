import { PgConnection } from '@infra/database/connections/pg-connection'
import { Context } from './context'
import { ClassLike } from '@infra/types/class-like.interface'
import { NodeMailerService } from '@infra/emails/mailers/node-mailer.service'

export const register = () => {
  Context.instance.set('Connection', PgConnection as unknown as ClassLike<PgConnection>)
  Context.instance.useValue('MailerService', new NodeMailerService())
}
register()
