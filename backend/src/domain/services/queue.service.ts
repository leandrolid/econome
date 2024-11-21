export abstract class IQueueService<T> {
  abstract enqueue(data: T): Promise<void>
}
