import { Router } from 'express';
import { createUserController, listUserController } from '../controllers';
import { validateSchemaMiddleware } from '../middlewares';
import { UserCreateSchema } from '../schemas';

export const userRouter = Router();

userRouter.post(
  '',
  validateSchemaMiddleware(UserCreateSchema),
  createUserController,
);

userRouter.get('', listUserController);
