import { Req } from './req.interface'
import { Res } from './res.interface'

export interface Controller {
  execute(req: Req, res: Res): any
}
