export abstract class IRepository<Entity> {
  abstract createOne(data: Partial<Entity>): Promise<Entity>
  abstract exists(data: Partial<Entity>): Promise<boolean>
}
