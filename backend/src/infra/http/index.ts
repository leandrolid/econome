import { CreateUserController } from './controllers/create-user.controller'
import { LoggerMiddleware } from './middlewares/logger.middleware'
import { CreateUserValidation } from './validations/create-user.validation'

export const controllers = [CreateUserController]

export const validations = [CreateUserValidation]

export const middlewares = [LoggerMiddleware]
