import {
  IEmailConfig,
  IEmailOutput,
  IEmailService,
  IEmailTemplate,
} from '@domain/services/email.service'
import * as nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import { resolve } from 'path'
import * as pug from 'pug'

export class NodeMailerService implements IEmailService {
  private readonly transporter: nodemailer.Transporter<
    SMTPTransport.SentMessageInfo,
    SMTPTransport.Options
  >
  constructor(options?: SMTPTransport.Options) {
    this.transporter = nodemailer.createTransport(
      options ?? {
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT!),
        authMethod: 'PLAIN',
        requireTLS: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
    )
  }

  async send(config: IEmailConfig): Promise<IEmailOutput> {
    const res = await this.transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: config.to,
      subject: config.subject,
      html: this.getTemplate(config),
    })
    return {
      id: res.messageId,
      preview: nodemailer.getTestMessageUrl(res) as string,
      accepted: res.accepted.map((mail) => (typeof mail === 'string' ? mail : mail.address)),
      rejected: res.rejected.map((mail) => (typeof mail === 'string' ? mail : mail.address)),
    }
  }

  private getTemplate(config: { template: IEmailTemplate; replacements?: Record<string, string> }) {
    const templatePath = resolve(__dirname, '..', 'templates', `${config.template}.pug`)
    return pug.compileFile(templatePath, { pretty: true })(config.replacements)
  }
}
