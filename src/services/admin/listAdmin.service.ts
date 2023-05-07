import prisma from '../../prisma';

export const listAdminService = async () => {
  const admin = await prisma.admin.findMany();

  return admin;
};
