import { z } from "zod";

const numberRegex = /^[0-9,.]+$/;

export const anotacaoColecaoSchemachema = z.object({
  PontoReferencia: z.string().min(1, "Campo obrigatório").trim(),
  KmPercorrido: z
    .string()
    .min(1, "Campo obrigatório")
    .regex(numberRegex, "Apenas números"),
  VeloVia: z
    .string()
    .min(1, "Campo obrigatório")
    .regex(numberRegex, "Apenas números"),
  VeloFeita: z
    .string()
    .min(1, "Campo obrigatório")
    .regex(numberRegex, "Apenas números"),
  consumo: z
    .string()
    .min(1, "Campo obrigatório")
    .regex(numberRegex, "Apenas números"),
  ar: z
    .string()
    .min(1, "Campo obrigatório")
    .regex(numberRegex, "Apenas números"),
  descricao: z.string().trim().optional(),
});

export type AnotacaoColecaoSchema = z.infer<typeof anotacaoColecaoSchemachema>;
