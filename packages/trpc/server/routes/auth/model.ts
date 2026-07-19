import { z } from "zod";

// Full DB-shape schema (mirrors IUser, minus Document internals)
export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  password: z.string(),
  salt: z.string(),
  name: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Safe subset for anything sent back to a client
export const PublicUserSchema = UserSchema.omit({
  password: true,
  salt: true,
});

export type PublicUser = z.infer<typeof PublicUserSchema>;

export const LoginWithProviderSchema = z.object({
  provider: z.enum(["google", "apple"]),
});
export type LoginWithProvider = z.infer<typeof LoginWithProviderSchema>;

export const googleCallbackInputSchema = z.object({
  code: z.string(),
  scope: z.string().optional(),
  iss: z.string().optional(),
});
