import { Router } from 'express';
import {
  createUserController,
  deleteUserController,
  favoriteUserController,
  listUserController,
  removeFavoriteUserController,
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

userRouter.patch(
  '/:id/favorite',
  verifyUserIsAuthenticated,
  favoriteUserController,
);

userRouter.delete(
  '/favorite/:id',
  verifyUserIsAuthenticated,
  removeFavoriteUserController,
);
