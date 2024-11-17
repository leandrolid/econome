import { DataClass } from '@domain/adapters/data-class'
import { Connection } from '@infra/database/interfaces/connection.interface'

export class Repository<Entity extends DataClass> {
  constructor(
    private readonly Target: typeof DataClass,
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
