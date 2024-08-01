import { FieldValues, useForm } from "react-hook-form";
import { ComecaTerminaSchema, comecaTerminaSchemachema } from "./";
import { zodResolver } from "@hookform/resolvers/zod";

export const useHookFormComecaTermina = () => {
  const { control, handleSubmit, formState, reset } =
    useForm<ComecaTerminaSchema>({
      defaultValues: {
        gastos: "",
        descricaoExtra: "",
      },
      resolver: zodResolver(comecaTerminaSchemachema),
      mode: "onChange",
    });
  return { control, handleSubmit, formState, reset };
};
