import { AppError } from '../../errors';
import prisma from '../../prisma';
import 'dotenv/config';

export const createImageService = async (
  user_id: string,
  file?: Express.Multer.File,
) => {
  if (!file) {
    throw new AppError('Image é obrigatório');
  }
  const { originalname: name, path, size, filename: key } = file;
  const data = {
    name,
    size,
    url: path,
    key,
    user_id,
  };

  if (!process.env.APP_URL) {
    const image = await prisma.image.create({
      data,
    });
    return image;
  }

  const url = `${process.env.APP_URL}/files/${key}`;
  data.url = url;

  const image = await prisma.image.create({
    data,
  });

  return image;
};
