import prisma from '../../prisma';
import { AdminArraySchema } from '../../schemas';

export const listAdminService = async () => {
  const admin = await prisma.admin.findMany();

  return AdminArraySchema.parse(admin);
};
