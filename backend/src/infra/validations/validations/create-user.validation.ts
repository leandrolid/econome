import { z } from 'zod'
import { IValidation } from '../interfaces/validation.interface'
import { CreateUserInput } from '@app/create-user/create-user.input'
import { Injectable } from '@nestjs/common'

@Injectable()
export class CreateUserValidation implements IValidation<CreateUserInput> {
  validate(data: any): CreateUserInput {
    const schema = z.object({
      email: z.string().email(),
    })
    return schema.parse(data)
  }
}
