import { CreateUserUseCase } from '@app/create-user/create-user.usecase'
import { Injectable } from '@infra/injection/injectable'
import { Controller } from '../interfaces/controller.interface'
import { HttpMessages } from '../interfaces/message.enum'
import { Req } from '../interfaces/req.interface'
import { Res } from '../interfaces/res.interface'
import { HttpStatusCode } from '../interfaces/status.enum'

@Injectable({
  controller: {
    method: 'post',
    path: 'users',
  },
})
export class CreateUserController implements Controller {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async execute(req: Req, res: Res) {
    await this.createUserUseCase.execute(req.body)
    return res.status(HttpStatusCode.CREATED).send(HttpMessages.CREATED())
  }
}
