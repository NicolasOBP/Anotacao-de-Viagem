import { useForm } from "react-hook-form";
import { ChegadaSchema, chegadaSchemachema } from "./ChegadaSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function useHookFormChegada() {
  const { control, handleSubmit, formState, reset } = useForm<ChegadaSchema>({
    defaultValues: {
      gastos: "",
      descricaoChegada: "",
    },
    resolver: zodResolver(chegadaSchemachema),
    mode: "onChange",
  });
  return { control, handleSubmit, formState, reset };
}
