export type IResponse = {
  status: (code: number) => IResponse
  send: (body: any) => void
}
