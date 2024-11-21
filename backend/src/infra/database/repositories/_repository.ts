import { BaseEntity } from '@domain/entities/_base.entity'
import { IRepository } from '@domain/repositories/_repository'
import { Connection } from '@infra/database/interfaces/connection.interface'

export class Repository<Entity extends BaseEntity> implements IRepository<Entity> {
  constructor(
    private readonly Target: typeof BaseEntity,
    protected readonly connection: Connection,
  ) {}

  async createOne(data: Partial<Entity>): Promise<Entity> {
    const [entity] = await this.connection.insertInto(this.Target, data)
    // @ts-ignore - TODO: Fix this
    return this.Target.create(entity)
  }

  async exists(data: Partial<Entity>): Promise<boolean> {
    return this.connection.exists(this.Target, data)
  }
}
