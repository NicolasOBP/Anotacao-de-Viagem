import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  AnotacaoColecaoSchema,
  anotacaoColecaoSchemachema,
} from "./anotacaoColecaoSchema";

export default function useHookFormAnotacaoColecao() {
  const { control, formState, handleSubmit, reset } =
    useForm<AnotacaoColecaoSchema>({
      resolver: zodResolver(anotacaoColecaoSchemachema),
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
