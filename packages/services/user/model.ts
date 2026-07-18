import { z } from "zod";

export const createUserInputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});
export type CreateUserInputSchema = z.infer<typeof createUserInputSchema>;

export const loginUserInputSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
export type LoginUserInputSchema = z.infer<typeof loginUserInputSchema>;
