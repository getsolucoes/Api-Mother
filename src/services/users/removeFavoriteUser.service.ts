import prisma from '../../prisma';

export const removeFavoriteUserService = async (id: string) => {
  await prisma.favorite.delete({
    where: { id },
  });
};
