import { Router } from 'express';
import {
  createAdminController,
  listAdminController,
  loginAdminController,
  profileAdminController,
} from '../controllers';
import {
  validateSchemaMiddleware,
  verifyUserIsAuthenticated,
} from '../middlewares';
import { AdminCreateSchema, AdminLoginSchema } from '../schemas';

export const adminRouter = Router();

adminRouter.post(
  '',
  validateSchemaMiddleware(AdminCreateSchema),
  createAdminController,
);

adminRouter.get('', verifyUserIsAuthenticated, listAdminController);

adminRouter.get('/profile', verifyUserIsAuthenticated, profileAdminController);

export const sessionRouter = Router();

sessionRouter.post(
  '',
  validateSchemaMiddleware(AdminLoginSchema),
  loginAdminController,
);
