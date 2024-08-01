import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { AnotacaoCompletaSchema, anotacaoCompletaSchemachema } from "./";

export const useHookFormAnotacaoCompleta = () => {
  const { control, formState, handleSubmit, reset }: FieldValues =
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
};
