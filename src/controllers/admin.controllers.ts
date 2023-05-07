import { Request, Response } from 'express';
import {
  createAdminService,
  listAdminService,
  loginAdminService,
} from '../services';

export const createAdminController = async (req: Request, res: Response) => {
  const admin = await createAdminService(req.body);
  return res.status(201).json(admin);
};

export const listAdminController = async (req: Request, res: Response) => {
  const admin = await listAdminService();
  return res.json(admin);
};

export const loginAdminController = async (req: Request, res: Response) => {
  const token = await loginAdminService(req.body);
  return res.status(201).json(token);
};
