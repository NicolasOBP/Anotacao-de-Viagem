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
        saindo: "",
        indo: "",
        KmPercorrido: 0,
        VeloVia: 0,
        VeloFeita: 0,
        consumo: 0,
        ar: 0,
        gastos: 0,
        descricao: "",
      },
      mode: "onChange",
    });
  return { control, formState, handleSubmit, reset };
}
