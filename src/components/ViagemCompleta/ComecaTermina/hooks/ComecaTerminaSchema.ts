import { z } from "zod";

export const comecaTerminaSchemachema = z.object({
  gasto: z.number().optional(),
  descricaoExtra: z.string().trim().optional(),
});

export type ComecaTerminaSchema = z.infer<typeof comecaTerminaSchemachema>;
