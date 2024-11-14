export interface Model {
  new (...args: any[]): any
  create(values: any): any
}
