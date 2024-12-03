export abstract class ITokenService {
  abstract create(params: ITokenCreateParams): string
  abstract verify<P = Record<string, any>>(params: ITokenVerifyParams): ITokenPayload<P>
  abstract decode<P = Record<string, any>>(params: ITokenDecodeParams): ITokenPayload<P>
}

export type ITokenCreateParams = {
  payload: Record<string, any>
  expiresIn?: string
}

export type ITokenVerifyParams = {
  token: string
}

export type ITokenPayload<Payload> = {
  iat?: number
  exp?: number
} & Payload

export type ITokenDecodeParams = {
  token: string
}
