import { z } from "zod";

const perfilSchema = z.object({
  email: z.string().optional(),
  username: z.string().optional(),
});

export type PerfilSchema = z.infer<typeof perfilSchema>;
