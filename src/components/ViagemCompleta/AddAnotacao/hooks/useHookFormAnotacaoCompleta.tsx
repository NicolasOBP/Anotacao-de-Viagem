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
        pontoReferencia: "",
        kmPercorrido: 0,
        veloMedia: 0,
        veloVia: 0,
        consumo: 0,
        ar: 0,
        descricaoExtra: "",
      },
      mode: "onChange",
    });
  return { control, formState, handleSubmit, reset };
}
