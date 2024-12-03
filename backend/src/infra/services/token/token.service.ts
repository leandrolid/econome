import {
  ITokenCreateParams,
  ITokenDecodeParams,
  ITokenService,
  ITokenPayload,
  ITokenVerifyParams,
} from '@domain/services/token.service'
import { sign, verify, decode } from 'jsonwebtoken'

export class JwtTokenService implements ITokenService {
  create({ payload, expiresIn }: ITokenCreateParams): string {
    return sign(payload, `${process.env.JWT_SECRET}`, {
      expiresIn: expiresIn ?? process.env.JWT_EXPIRES_IN,
    })
  }

  verify<P>({ token }: ITokenVerifyParams): ITokenPayload<P> {
    return verify(token, `${process.env.JWT_SECRET}`) as ITokenPayload<P>
  }

  decode<P>({ token }: ITokenDecodeParams): ITokenPayload<P> {
    return decode(token, { json: true }) as ITokenPayload<P>
  }
}
