import { z } from "zod";

export const viagemComepltaSchemachema = z.object({
  saindoDe: z.string({ required_error: "Campo obrigatório" }).trim(),
  indoPara: z.string({ required_error: "Campo obrigatório" }).trim(),
});

export type ViagmeCompletaSchema = z.infer<typeof viagemComepltaSchemachema>;
