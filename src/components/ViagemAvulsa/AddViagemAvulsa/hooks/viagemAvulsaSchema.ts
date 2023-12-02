import { z } from "zod";

const numberRegex = /^[0-9,.]+$/;

export const viagemAvulsaSchemachema = z.object({
  saindo: z.string().min(1, "Campo obrigatório").trim(),
  indo: z.string().min(1, "Campo obrigatório").trim(),
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
  gastos: z.string().regex(numberRegex, "Apenas números").optional(),
  descricao: z.string().trim().optional(),
});

export type ViagemAvulsaSchema = z.infer<typeof viagemAvulsaSchemachema>;
