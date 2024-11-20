import { IRequest } from './request.interface'
import { IResponse } from './response.interface'

export interface IController {
  execute(req: IRequest, res: IResponse): any
}
