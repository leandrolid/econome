export type CreateUserOutput = {
  user: {
    id: number
    email: string
  }
  userCode: {
    userId: number
    code: string
  }
}
