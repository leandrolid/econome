import { CreateUserUseCase } from '@app/create-user/create-user.usecase'
import { Controller } from '@infra/http/interfaces/controller.interface'
import { HttpMessages } from '@infra/http/interfaces/message.enum'
import { Req } from '@infra/http/interfaces/req.interface'
import { Res } from '@infra/http/interfaces/res.interface'
import { HttpStatusCode } from '@infra/http/interfaces/status.enum'
import { Injectable } from '@infra/injection/injectable'
import { CreateUserValidation } from '@infra/validations/validations/create-user.validation'

@Injectable({
  controller: {
    method: 'post',
    path: 'users',
  },
})
export class CreateUserController implements Controller {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly createUserValidation: CreateUserValidation,
  ) {}

  async execute(req: Req, res: Res) {
    const input = this.createUserValidation.validate(req.body)
    await this.createUserUseCase.execute(input)
    return res.status(HttpStatusCode.CREATED).send(HttpMessages.CREATED())
  }
}
