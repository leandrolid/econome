import { MailerConfig, MailerOutput, MailerService } from '@domain/services/mailer.service'
import * as nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

export class NodeMailerService implements MailerService {
  private readonly transporter: nodemailer.Transporter<
    SMTPTransport.SentMessageInfo,
    SMTPTransport.Options
  >

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT!),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })
  }

  async send(config: MailerConfig): Promise<MailerOutput> {
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
