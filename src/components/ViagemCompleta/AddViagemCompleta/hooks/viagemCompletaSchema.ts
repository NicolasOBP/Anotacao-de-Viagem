import { z } from "zod";

export const viagemComepltaSchemachema = z.object({
  saindo: z.string().min(1, "Campo obrigatório").trim().optional(),
  indo: z.string().min(1, "Campo obrigatório").trim().optional(),
});

export type ViagmeCompletaSchema = z.infer<typeof viagemComepltaSchemachema>;
