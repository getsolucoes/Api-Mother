import prisma from '../../prisma';
import { IAdminRequest } from '../../interfaces';
import { hashSync } from 'bcryptjs';
import { AppError } from '../../errors';
import { AdminReturnSchema } from '../../schemas';

export const createAdminService = async ({
  username,
  password,
}: IAdminRequest) => {
  let admin = await prisma.admin.findUnique({
    where: { username },
  });

  if (admin) {
    throw new AppError('user already exists', 409);
  }

  password = hashSync(password, 10);

  admin = await prisma.admin.create({
    data: {
      username,
      password,
    },
  });

  return AdminReturnSchema.parse(admin);
};
