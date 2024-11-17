import { DataClass } from '@domain/adapters/data-class'
import { Model } from '@infra/database/interfaces/model.interface'
import { Connection } from '@infra/database/interfaces/connection.interface'

export class Repository<Entity extends DataClass> {
  constructor(
    private readonly target: Model,
    protected readonly connection: Connection,
  ) {}

  async createOne(data: Partial<Entity>): Promise<Entity> {
    const [entity] = await this.connection.insertInto(this.target, data)
    return this.target.create(entity)
  }
}
