import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  AnotacaoCompletaSchema,
  anotacaoCompletaSchemachema,
} from "./anotacaoCompletaSchema";

export default function useHookFormAnotacaoCompleta() {
  const { control, formState, handleSubmit, reset } =
    useForm<AnotacaoCompletaSchema>({
      resolver: zodResolver(anotacaoCompletaSchemachema),
      defaultValues: {
        PontoReferencia: "",
        KmPercorrido: "",
        VeloFeita: "",
        VeloVia: "",
        consumo: "",
        ar: "",
        descricao: "",
      },
      mode: "onChange",
    });
  return { control, formState, handleSubmit, reset };
}
