import { z } from "zod";

export const anotacaoCompletaSchemachema = z.object({
  PontoReferencia: z.string({ required_error: "Campo obrigatório" }).trim(),
  KmPercorrido: z.number({ required_error: "Campo obrigatório" }),
  VeloVia: z.number({ required_error: "Campo obrigatório" }),
  VeloFeita: z.number({ required_error: "Campo obrigatório" }),
  consumo: z.number({ required_error: "Campo obrigatório" }),
  ar: z.number({ required_error: "Campo obrigatório" }),
  descricao: z.string().trim().optional(),
});

export type AnotacaoCompletaSchema = z.infer<
  typeof anotacaoCompletaSchemachema
>;
