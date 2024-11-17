const produce = (proto, base, values) => {
  return Object.assign(Object.create(proto), base, values)
}

export class DataClass {
  static create<Type extends DataClass>(
    this: { new (v): Type },
    values?: Omit<Partial<Type>, keyof DataClass>,
  ): Type {
    return produce(this.prototype, new this(DataClass), values)
  }

  constructor(self) {
    if (self !== DataClass) {
      throw new Error(`Use ${this.constructor.name}.create(...) instead of new operator`)
    }
  }

  copy(values?: Omit<Partial<this>, keyof DataClass>): this {
    return produce(Object.getPrototypeOf(this), this, values)
  }

  equals(other: Record<string, any>): boolean {
    return (
      Object.getPrototypeOf(this) === Object.getPrototypeOf(other) &&
      Object.keys(this).every((key) => this[key] === other[key])
    )
  }
}
