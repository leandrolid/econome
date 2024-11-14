import { CreateUserUseCase } from '@app/create-user/create-user.usecase'
import { Injectable } from '@infra/injection/injectable'
import { Controller } from '../interfaces/controller'
import { HttpMessages } from '../interfaces/message'
import { Req } from '../interfaces/req'
import { Res } from '../interfaces/res'
import { HttpStatusCode } from '../interfaces/status'

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
