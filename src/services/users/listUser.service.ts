import prisma from '../../prisma';

export const listUserService = async () => {
  const user = await prisma.user.findMany({
    include: { image: true, favorites_in: true },
  });

  return user;
};
