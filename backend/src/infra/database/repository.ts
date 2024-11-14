import { DataClass } from '@domain/adapters/data-class'
import { Connection } from './connection'
import { Model } from './model'

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
