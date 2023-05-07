import { AppError } from '../../errors';
import prisma from '../../prisma';
import { AdminReturnSchema } from '../../schemas';

export const retrieveAdminService = async (id: string) => {
  const admin = await prisma.admin.findUnique({
    where: { id },
  });

  if (!admin) {
    throw new AppError('user not found', 404);
  }

  return AdminReturnSchema.parse(admin);
};
