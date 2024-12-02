import { UserCode } from '@domain/entities/user-code.entity'

export abstract class IUserCodeRepository {
  abstract createOne(data: Partial<UserCode>): Promise<UserCode>
  abstract isCodeValid(data: { userId: number; code: string }): Promise<boolean>
}
