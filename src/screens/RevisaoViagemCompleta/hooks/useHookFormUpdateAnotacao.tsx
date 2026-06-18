import {
  AnotacaoColecaoSchema,
  anotacaoColecaoSchemachema,
} from "@/components/ColecaoViagem/AddAnotacao/hooks";
import { AnotacaoCompleta } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useHookFormUpdateAnotacao = (item: AnotacaoCompleta) => {
  const { control, formState, handleSubmit, reset } =
    useForm<AnotacaoColecaoSchema>({
      resolver: zodResolver(anotacaoColecaoSchemachema),
      defaultValues: {
        PontoReferencia: item.PontoReferencia,
        KmPercorrido: item.KmPercorrido,
        VeloFeita: item.VeloFeita,
        VeloVia: item.VeloVia,
        consumo: item.consumo,
        ar: item.ar,
        descricao: item.descricao,
      },
      mode: "onChange",
    });
  return { control, formState, handleSubmit, reset };
};
