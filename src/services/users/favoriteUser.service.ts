import prisma from '../../prisma';

export const favoriteUserService = async (
  user_id: string,
  admin_id: string,
) => {
  const favorite = await prisma.favorite.create({
    data: { user_id, admin_id },
  });

  return favorite;
};
