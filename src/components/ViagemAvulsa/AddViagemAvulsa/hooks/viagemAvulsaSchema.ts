import { z } from "zod";

export const viagemAvulsaSchemachema = z.object({
  saindoDe: z.string({ required_error: "Campo obrigatório" }).trim(),
  indoPara: z.string({ required_error: "Campo obrigatório" }).trim(),
  kmPercorrido: z.number({ required_error: "Campo obrigatório" }),
  veloVia: z.number({ required_error: "Campo obrigatório" }),
  veloMedia: z.number({ required_error: "Campo obrigatório" }),
  consumo: z.number({ required_error: "Campo obrigatório" }),
  ar: z.number({ required_error: "Campo obrigatório" }),
  gasto: z.number().optional(),
  descricaoExtra: z.string().trim().optional(),
});

export type ViagemAvulsaSchema = z.infer<typeof viagemAvulsaSchemachema>;
