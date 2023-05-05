import prisma from '../../prisma';
import { IUserRequest } from '../../interfaces';

export const createUserService = async (data: IUserRequest) => {
  const user = await prisma.user.create({
    data,
  });

  return user;
};
