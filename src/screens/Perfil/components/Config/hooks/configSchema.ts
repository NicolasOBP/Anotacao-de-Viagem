import { z } from "zod";

export const configSchema = z.object({
  Gasolina: z.string().trim().optional(),
  Etanol: z.string().trim().optional(),
});

export type ConfigSchema = z.infer<typeof configSchema>;
