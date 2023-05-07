import { Router } from 'express';
import {
  createUserController,
  deleteUserController,
  listUserController,
} from '../controllers';
import {
  validateSchemaMiddleware,
  verifyUserIsAuthenticated,
} from '../middlewares';
import { UserCreateSchema } from '../schemas';

export const userRouter = Router();

userRouter.post(
  '',
  validateSchemaMiddleware(UserCreateSchema),
  createUserController,
);

userRouter.get('', verifyUserIsAuthenticated, listUserController);

userRouter.delete('/:id', verifyUserIsAuthenticated, deleteUserController);
