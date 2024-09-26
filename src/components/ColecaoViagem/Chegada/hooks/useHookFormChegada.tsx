import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChegadaSchema, chegadaSchemachema } from "./";

export const useHookFormChegada = () => {
  const { control, handleSubmit, formState, reset } = useForm<ChegadaSchema>({
    defaultValues: {
      gastos: "",
      descricaoChegada: "",
    },
    resolver: zodResolver(chegadaSchemachema),
    mode: "onChange",
  });
  return { control, handleSubmit, formState, reset };
};
