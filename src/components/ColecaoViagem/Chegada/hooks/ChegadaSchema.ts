import { z } from "zod";

export const chegadaSchemachema = z.object({
  gastos: z.string().trim().optional(),
  descricaoChegada: z.string().trim().optional(),
});

export type ChegadaSchema = z.infer<typeof chegadaSchemachema>;
