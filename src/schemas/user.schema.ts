import { z } from 'zod';

export const UserCreateSchema = z.object({
  fullName: z.string(),
  whatsApp: z.string(),
  history: z.string(),
});
