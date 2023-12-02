import { useForm } from "react-hook-form";
import {
  ViagemAvulsaSchema,
  viagemAvulsaSchemachema,
} from "./viagemAvulsaSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function useHookFormAddViagemAvulsa() {
  const { control, formState, handleSubmit, reset } =
    useForm<ViagemAvulsaSchema>({
      resolver: zodResolver(viagemAvulsaSchemachema),
      defaultValues: {
        saindoDe: "",
        indoPara: "",
        kmPercorrido: 0,
        veloVia: 0,
        veloMedia: 0,
        consumo: 0,
        ar: 0,
        gasto: 0,
        descricaoExtra: "",
      },
      mode: "onChange",
    });
  return { control, formState, handleSubmit, reset };
}
