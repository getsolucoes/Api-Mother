import { Request, Response } from 'express';
import { createImageService } from '../services';

export const createImageController = async (req: Request, res: Response) => {
  const image = await createImageService(req.params.id, req.file);
  return res.status(201).json(image);
};
