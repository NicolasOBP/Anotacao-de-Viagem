import { z } from "zod";

export const criaColecaoSchemamema = z.object({
  saindo: z.string().min(1, "Campo obrigatório").trim().optional(),
  indo: z.string().min(1, "Campo obrigatório").trim().optional(),
});

export type CriaColecaoSchema = z.infer<typeof criaColecaoSchemamema>;
