import { MailerConfig, MailerService } from '@domain/services/mailer.service'
import { resolve } from '@infra/injection/resolve'

describe('EmailService', () => {
  let emailService: MailerService
  const config: MailerConfig = {
    to: 'any_to@email.com',
    subject: 'any_subject',
    template: 'confirmation-code',
  }

  beforeEach(async () => {
    emailService = resolve('MailerService')
  })

  it('should send an email', async () => {
    const output = await emailService.send(config)
    expect(output.preview).toMatch('https://ethereal.email/message/')
    expect(output).toMatchObject({
      id: expect.any(String),
      preview: expect.any(String),
      accepted: expect.any(Array),
      rejected: expect.any(Array),
    })
  })
})
