import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import { AppError } from '../../errors';
import prisma from '../../prisma';
import { IAdminLogin } from '../../interfaces';

export const loginAdminService = async ({
  username,
  password,
}: IAdminLogin): Promise<{ token: string }> => {
  const admin = await prisma.admin.findUnique({
    where: { username },
  });

  if (!admin) {
    throw new AppError('User or password invalid', 403);
  }

  const passwordMatch = await compare(password, admin.password);
  if (!passwordMatch) {
    throw new AppError('User or password invalid', 403);
  }

  const token = jwt.sign({}, process.env.SECRET_KEY!, {
    expiresIn: '24h',
  });

  return { token: token };
};
