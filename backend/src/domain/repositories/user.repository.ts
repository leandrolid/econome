import { User } from '@domain/entities/user.entity'

export abstract class IUserRepository {
  abstract createOne(data: Partial<User>): Promise<User>
  abstract isEmailRegistered(email: string): Promise<boolean>
}
