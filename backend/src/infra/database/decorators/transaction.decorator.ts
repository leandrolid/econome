import { HttpError } from '@domain/errors/http.error'
import { DrizzleConnection } from '../connections/drizzle.connection'
import { ConflictError } from '@domain/errors/conflict.error'

export const Transaction = (message: string): MethodDecorator => {
  return (_target: any, _propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value
    descriptor.value = async function (...args: any[]) {
      const connection = DrizzleConnection.instance
      try {
        await connection.query('BEGIN')
        const result = await originalMethod.apply(this, args)
        await connection.query('COMMIT')
        return result
      } catch (error) {
        await connection.query('ROLLBACK')
        if (error instanceof HttpError) throw error
        console.error(error)
        throw new ConflictError(message)
      }
    }
  }
}
