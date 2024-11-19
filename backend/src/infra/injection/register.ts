import { PgConnection } from '@infra/database/connections/pg-connection'
import { Context } from './context'
import { NodeMailerService } from '@infra/emails/mailers/node-mailer.service'
import { ClassLike } from '@infra/types/class-like.interface'
import { CryptoHashService } from '@infra/text/hash/hash.service'

export const register = () => {
  Context.instance.set('Connection', PgConnection as unknown as ClassLike<PgConnection>)
  Context.instance.set('MailerService', NodeMailerService)
  Context.instance.set('HashService', CryptoHashService)
}
register()
