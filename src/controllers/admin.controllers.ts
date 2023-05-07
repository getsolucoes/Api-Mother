import { Request, Response } from 'express';
import {
  createAdminService,
  listAdminService,
  listFavoritesAdminService,
  loginAdminService,
  retrieveAdminService,
} from '../services';

export const createAdminController = async (req: Request, res: Response) => {
  const admin = await createAdminService(req.body);
  return res.status(201).json(admin);
};

export const listAdminController = async (req: Request, res: Response) => {
  const admin = await listAdminService();
  return res.json(admin);
};

export const listFavoritesAdminController = async (
  req: Request,
  res: Response,
) => {
  const favorites = await listFavoritesAdminService(req.admin.id);
  return res.json(favorites);
};

export const profileAdminController = async (req: Request, res: Response) => {
  const user = await retrieveAdminService(req.admin.id);
  return res.json(user);
};

export const loginAdminController = async (req: Request, res: Response) => {
  const token = await loginAdminService(req.body);
  return res.status(201).json(token);
};
