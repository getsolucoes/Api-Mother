import { AppError } from '../../errors';
import prisma from '../../prisma';

export const retrieveAdminService = async (id: string) => {
  const admin = await prisma.admin.findUnique({
    where: { id },
    include: { favorites: true },
  });

  if (!admin) {
    throw new AppError('user not found', 404);
  }

  return admin;
};
