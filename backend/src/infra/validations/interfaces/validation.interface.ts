export interface Validation<T> {
  validate: (data: any) => T
}
