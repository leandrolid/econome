import 'dotenv/config'
import 'reflect-metadata'
import '@infra/injection/register'
import { Context } from '@infra/injection/context'
import { NodeMailerService } from '@infra/emails/mailers/node-mailer.service'

const register = async () => {
  Context.instance.useValue(
    'MailerService',
    new NodeMailerService({
      host: process.env.TEST_EMAIL_HOST,
      port: parseInt(process.env.TEST_EMAIL_PORT!),
      from: process.env.TEST_EMAIL_FROM,
      auth: {
        user: process.env.TEST_EMAIL_USER,
        pass: process.env.TEST_EMAIL_PASSWORD,
      },
    }),
  )
}
register()
