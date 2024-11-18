import 'dotenv/config'
import 'reflect-metadata'
import '@infra/injection/register'
import { Context } from '@infra/injection/context'
import { EtherealMailerService } from '../fakes/ethereal-mailer.service'

Context.instance.set('MailerService', EtherealMailerService)
