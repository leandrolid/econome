import { z } from 'zod'
import { CreateUserInput } from '@app/create-user/create-user.input'
import { Injectable } from '@nestjs/common'
import { IValidation } from './_validation'

@Injectable()
export class CreateUserValidation extends IValidation<CreateUserInput> {
  protected transform(data: any): CreateUserInput {
    const schema = z.object({
      email: z.string().email(),
    })
    return schema.parse(data)
  }
}
