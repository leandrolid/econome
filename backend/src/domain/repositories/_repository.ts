import { Target } from '@infra/database/interfaces/connection.interface'

export abstract class IRepository<Entity> {
  abstract createOne(Target: Target, data: Partial<Entity>): Promise<Entity>
  abstract exists(Target: Target, data: Partial<Entity>): Promise<boolean>
}
