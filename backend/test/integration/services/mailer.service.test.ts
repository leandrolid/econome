import { MailerConfig, MailerService } from '@domain/services/mailer.service'
import { NodeMailerService } from '@infra/emails/mailers/node-mailer.service'
import { Test, TestingModule } from '@nestjs/testing'

describe('EmailService', () => {
  let emailService: MailerService
  let app: TestingModule
  const config: MailerConfig = {
    to: 'any_to@email.com',
    subject: 'any_subject',
    template: 'confirmation-code',
  }

  beforeEach(async () => {
    app = await Test.createTestingModule({
      providers: [
        {
          provide: NodeMailerService,
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
    emailService = await app.resolve(NodeMailerService)
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
