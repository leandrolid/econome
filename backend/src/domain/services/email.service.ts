export abstract class IEmailService {
  abstract send(config: IEmailConfig): Promise<IEmailOutput>
}

export type IEmailConfig = {
  to: string
  subject: string
  template: IEmailTemplate
  replacements?: Record<string, string>
}

export type IEmailTemplate = 'confirmation-code'

export type IEmailOutput = {
  id: string
  preview: string
  accepted: string[]
  rejected: string[]
}
