export type Res = {
  status: (code: number) => Res
  send: (body: any) => void
}
