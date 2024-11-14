import { Context } from './context'

export const resolve = <T = any>(token: string): T => {
  return Context.instance.get(token)
}
