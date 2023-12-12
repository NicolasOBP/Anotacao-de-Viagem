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
        KmPercorrido: "",
        VeloVia: "",
        VeloFeita: "",
        consumo: "",
        ar: "",
        gastos: "",
        descricao: "",
      },
      mode: "onChange",
    });
  return { control, formState, handleSubmit, reset };
}
