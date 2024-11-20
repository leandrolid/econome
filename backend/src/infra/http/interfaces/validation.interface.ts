export interface IValidation<T> {
  validate: (data: any) => T
}
