import { useForm } from "react-hook-form";
import { ViagemAvulsaSchema, viagemAvulsaSchemachema } from "./";
import { zodResolver } from "@hookform/resolvers/zod";

export const useHookFormAddViagemAvulsa = () => {
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
};
