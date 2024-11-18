import { MailerConfig, MailerService, MailerOutput } from '@domain/services/mailer.service'
import * as nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

export class EtherealMailerService implements MailerService {
  private transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo, SMTPTransport.Options>

  async lazyInit(): Promise<void> {
    const account = await nodemailer.createTestAccount()
    this.transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })
  }

  async send(config: MailerConfig): Promise<MailerOutput> {
    if (!this.transporter) await this.lazyInit()
    const res = await this.transporter.sendMail({
      to: config.to,
      subject: config.subject,
    })
    return {
      id: res.messageId,
      preview: nodemailer.getTestMessageUrl(res) as string,
      accepted: res.accepted.map((mail) => (typeof mail === 'string' ? mail : mail.address)),
      rejected: res.rejected.map((mail) => (typeof mail === 'string' ? mail : mail.address)),
    }
  }
}
