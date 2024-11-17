export interface ClassLike<T> extends Function {
  new (...args: any[]): T
}
