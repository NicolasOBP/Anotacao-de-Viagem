import { z } from "zod";

const numberRegex = /^[0-9,.]+$/;

export const anotacaoCompletaSchemachema = z.object({
  PontoReferencia: z.string().min(1, "Campo obrigatório").trim().optional(),
  KmPercorrido: z
    .string()
    .min(1, "Campo obrigatório")
    .regex(numberRegex, "Apenas números")
    .optional(),
  VeloVia: z
    .string()
    .min(1, "Campo obrigatório")
    .regex(numberRegex, "Apenas números")
    .optional(),
  VeloFeita: z
    .string()
    .min(1, "Campo obrigatório")
    .regex(numberRegex, "Apenas números")
    .optional(),
  consumo: z
    .string()
    .min(1, "Campo obrigatório")
    .regex(numberRegex, "Apenas números")
    .optional(),
  ar: z
    .string()
    .min(1, "Campo obrigatório")
    .regex(numberRegex, "Apenas números")
    .optional(),
  descricao: z.string().trim().optional(),
});

export type AnotacaoCompletaSchema = z.infer<
  typeof anotacaoCompletaSchemachema
>;
