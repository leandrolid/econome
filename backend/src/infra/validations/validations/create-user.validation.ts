import { z } from 'zod'
import { Validation } from '../interfaces/validation.interface'
import { Injectable } from '@infra/injection/injectable'
import { CreateUserInput } from '@app/create-user/create-user.input'

@Injectable()
export class CreateUserValidation implements Validation<CreateUserInput> {
  validate(data: any): CreateUserInput {
    const schema = z.object({
      email: z.string().email(),
    })
    return schema.parse(data)
  }
}
