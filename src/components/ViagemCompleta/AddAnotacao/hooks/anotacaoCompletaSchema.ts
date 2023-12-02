import { z } from "zod";

export const anotacaoCompletaSchemachema = z.object({
  pontoReferencia: z.string({ required_error: "Campo obrigatório" }).trim(),
  kmPercorrido: z.number({ required_error: "Campo obrigatório" }),
  veloVia: z.number({ required_error: "Campo obrigatório" }),
  veloMedia: z.number({ required_error: "Campo obrigatório" }),
  consumo: z.number({ required_error: "Campo obrigatório" }),
  ar: z.number({ required_error: "Campo obrigatório" }),
  descricaoExtra: z.string().trim().optional(),
});

export type AnotacaoCompletaSchema = z.infer<
  typeof anotacaoCompletaSchemachema
>;
