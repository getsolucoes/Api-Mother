import { Router } from 'express';
import { upload } from '../libs';
import { createImageController } from '../controllers';

export const imageRouter = Router();

imageRouter.post(
  '/:id',
  upload.single('image'),
  createImageController,
);
