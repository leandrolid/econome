export interface QueueService<T> {
  enqueue(data: T): Promise<void>
  process(): void
  getQueue(): any
}
