import { IEmailConfig, IEmailService } from '@domain/services/email.service'
import { NodeMailerService } from '@infra/services/emails/mailers/node-mailer.service'
import { Test, TestingModule } from '@nestjs/testing'

describe('EmailService', () => {
  let emailService: IEmailService
  let app: TestingModule
  const config: IEmailConfig = {
    to: 'any_to@email.com',
    subject: 'any_subject',
    template: 'confirmation-code',
  }

  beforeEach(async () => {
    app = await Test.createTestingModule({
      providers: [
        {
          provide: IEmailService,
          useValue: new NodeMailerService({
            host: process.env.TEST_EMAIL_HOST,
            port: parseInt(process.env.TEST_EMAIL_PORT!),
            from: process.env.TEST_EMAIL_FROM,
            auth: {
              user: process.env.TEST_EMAIL_USER,
              pass: process.env.TEST_EMAIL_PASSWORD,
            },
          }),
        },
      ],
    }).compile()
    emailService = await app.resolve(IEmailService)
  })

  afterEach(async () => {
    await app.close()
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
