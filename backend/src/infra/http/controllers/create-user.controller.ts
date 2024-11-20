import { CreateUserUseCase } from '@app/create-user/create-user.usecase'
import { IController } from '@infra/http/interfaces/controller.interface'
import { HttpMessages } from '@infra/http/interfaces/message.enum'
import { HttpStatusCode } from '@infra/http/interfaces/status.enum'
import { IRequest } from '../interfaces/request.interface'
import { IResponse } from '../interfaces/response.interface'
import { Controller, Post, Req, Res } from '@nestjs/common'
import { CreateUserValidation } from '../validations/create-user.validation'

@Controller({
  path: 'users',
})
export class CreateUserController implements IController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly createUserValidation: CreateUserValidation,
  ) {}

  @Post()
  async execute(@Req() req: IRequest, @Res() res: IResponse) {
    const input = this.createUserValidation.validate(req.body)
    await this.createUserUseCase.execute(input)
    return res.status(HttpStatusCode.CREATED).send(HttpMessages.CREATED())
  }
}
