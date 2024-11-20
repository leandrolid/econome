import { z } from 'zod'
import { CreateUserInput } from '@app/create-user/create-user.input'
import { Injectable } from '@nestjs/common'
import { IValidation } from '../interfaces/validation.interface'
import { Validate } from '../decorators/validate.decorator'

@Injectable()
export class CreateUserValidation implements IValidation<CreateUserInput> {
  @Validate()
  validate(data: any): CreateUserInput {
    const schema = z.object({
      email: z.string().email(),
    })
    return schema.parse(data)
  }
}
