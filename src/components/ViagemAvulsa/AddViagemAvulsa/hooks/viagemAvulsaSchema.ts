import { z } from "zod";

export const viagemAvulsaSchemachema = z.object({
  saindo: z.string({ required_error: "Campo obrigatório" }).trim(),
  indo: z.string({ required_error: "Campo obrigatório" }).trim(),
  KmPercorrido: z.number({ required_error: "Campo obrigatório" }),
  VeloVia: z.number({ required_error: "Campo obrigatório" }),
  VeloFeita: z.number({ required_error: "Campo obrigatório" }),
  consumo: z.number({ required_error: "Campo obrigatório" }),
  ar: z.number({ required_error: "Campo obrigatório" }),
  gastos: z.number().optional(),
  descricao: z.string().trim().optional(),
});

export type ViagemAvulsaSchema = z.infer<typeof viagemAvulsaSchemachema>;
