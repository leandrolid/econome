import { BaseEntity } from '@domain/entities/_base.entity'
import { IRepository } from '@domain/repositories/_repository'
import { Connection, Target } from '@infra/database/interfaces/connection.interface'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class Repository<Entity extends BaseEntity> implements IRepository<Entity> {
  constructor(@Inject('Connection') protected readonly connection: Connection) {}

  async createOne(Target: Target, data: Partial<Entity>): Promise<Entity> {
    const [entity] = await this.connection.insertInto(Target, data)
    // @ts-ignore - TODO: Fix this
    return Target.create(entity)
  }

  async exists(Target: Target, data: Partial<Entity>): Promise<boolean> {
    return this.connection.exists(Target, data)
  }

  async getId(Target: Target, data: Partial<Entity>): Promise<number> {
    return this.connection.getId(Target, data)
  }
}
