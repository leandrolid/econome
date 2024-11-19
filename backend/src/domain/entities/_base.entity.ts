const produce = (proto, base, values) => {
  return Object.assign(Object.create(proto), base, values)
}

export abstract class BaseEntity {
  static create<Type extends BaseEntity>(
    this: { new (v): Type },
    values?: Omit<Partial<Type>, keyof BaseEntity>,
  ): Type {
    return produce(this.prototype, new this(BaseEntity), values)
  }

  constructor(self) {
    if (self !== BaseEntity) {
      throw new Error(`Use ${this.constructor.name}.create(...) instead of new operator`)
    }
  }

  copy(values?: Omit<Partial<this>, keyof BaseEntity>): this {
    return produce(Object.getPrototypeOf(this), this, values)
  }

  equals(other: Record<string, any>): boolean {
    return (
      Object.getPrototypeOf(this) === Object.getPrototypeOf(other) &&
      Object.keys(this).every((key) => this[key] === other[key])
    )
  }
}
