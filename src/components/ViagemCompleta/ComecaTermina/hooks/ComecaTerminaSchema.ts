import { z } from "zod";

const numberRegex = /^[0-9,.]+$/;

export const comecaTerminaSchemachema = z.object({
  gastos: z.string().regex(numberRegex, "Apenas números").optional(),
  descricaoExtra: z.string().trim().optional(),
});

export type ComecaTerminaSchema = z.infer<typeof comecaTerminaSchemachema>;
