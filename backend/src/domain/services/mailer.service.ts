export interface MailerService {
  send(config: MailerConfig): Promise<MailerOutput>
  lazyInit?(): Promise<void>
}

export type MailerConfig = {
  to: string
  subject: string
  template: MailerTemplate
}
type MailerTemplate = 'confirmation-code'

export type MailerOutput = {
  id: string
  preview: string
  accepted: string[]
  rejected: string[]
}
