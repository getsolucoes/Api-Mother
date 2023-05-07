import { Request, Response } from 'express';
import {
  createUserService,
  deleteUserService,
  favoriteUserService,
  listUserService,
  removeFavoriteUserService,
} from '../services';

export const createUserController = async (req: Request, res: Response) => {
  const user = await createUserService(req.body);
  return res.status(201).json(user);
};

export const listUserController = async (req: Request, res: Response) => {
  const users = await listUserService();
  return res.json(users);
};

export const deleteUserController = async (req: Request, res: Response) => {
  await deleteUserService(req.params.id);
  return res.status(204).json({});
};

export const favoriteUserController = async (req: Request, res: Response) => {
  const user = await favoriteUserService(req.params.id, req.admin.id);
  return res.json(user);
};

export const removeFavoriteUserController = async (
  req: Request,
  res: Response,
) => {
  const user = await removeFavoriteUserService(req.params.id);
  return res.json(user);
};
