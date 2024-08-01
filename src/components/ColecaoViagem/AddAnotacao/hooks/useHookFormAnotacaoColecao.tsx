import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { AnotacaoColecaoSchema, anotacaoColecaoSchemachema } from "./";

export const useHookFormAnotacaoColecao = () => {
  const { control, formState, handleSubmit, reset }: FieldValues =
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
};
