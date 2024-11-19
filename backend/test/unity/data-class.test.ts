import { BaseEntity } from '@domain/entities/_base.entity'

describe('BaseEntity', () => {
  class AnyClass extends BaseEntity {
    anyProperty: string
  }

  it('should create instance', () => {
    const output = AnyClass.create()
    expect(output).toBeInstanceOf(AnyClass)
  })

  it('should copy instance', () => {
    const output = AnyClass.create()
    expect(output.copy()).toMatchObject(output)
  })

  it('should compare instances', () => {
    const output = AnyClass.create()
    expect(output.equals(output.copy())).toBeTruthy()
    expect(output.equals({ ...output })).toBeFalsy()
  })

  it('should create instance with values', () => {
    const output = AnyClass.create({ anyProperty: 'any_value' })
    expect(output.anyProperty).toEqual('any_value')
  })

  it('should copy instance with values', () => {
    const output = AnyClass.create({ anyProperty: 'any_value' })
    expect(output.copy({ anyProperty: 'other_value' }).anyProperty).toEqual('other_value')
  })

  it('should compare instances with values', () => {
    const output = AnyClass.create({ anyProperty: 'any_value' })
    expect(output.equals(output.copy())).toBeTruthy()
    expect(output.equals(output.copy({ anyProperty: 'other_value' }))).toBeFalsy()
  })

  it('should throw error when using new operator', () => {
    expect(() => new AnyClass({})).toThrow('Use AnyClass.create(...) instead of new operator')
  })
})
