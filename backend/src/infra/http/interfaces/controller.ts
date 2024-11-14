import { Req } from './req'
import { Res } from './res'

export interface Controller {
  execute(req: Req, res: Res): any
}
