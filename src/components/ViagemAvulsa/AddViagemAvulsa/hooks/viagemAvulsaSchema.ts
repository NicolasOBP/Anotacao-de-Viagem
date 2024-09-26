import { z } from "zod";

const numberRegex = /^[0-9,.]+$/;

export const viagemAvulsaSchemachema = z.object({
  saindo: z.string().min(1, "Campo obrigatório").trim().optional(),
  indo: z.string().min(1, "Campo obrigatório").trim().optional(),
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
  gastos: z.string().regex(numberRegex, "Apenas números").optional(),
  descricao: z.string().trim().optional(),
});

export type ViagemAvulsaSchema = z.infer<typeof viagemAvulsaSchemachema>;
