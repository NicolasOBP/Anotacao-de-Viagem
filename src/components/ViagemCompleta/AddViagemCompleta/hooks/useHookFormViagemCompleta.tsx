import { FieldValues, useForm } from "react-hook-form";
import { ViagmeCompletaSchema, viagemComepltaSchemachema } from "./";
import { zodResolver } from "@hookform/resolvers/zod";

export const useHookFormViagemCompleta = () => {
  const { control, handleSubmit, reset, formState }: FieldValues =
    useForm<ViagmeCompletaSchema>({
      resolver: zodResolver(viagemComepltaSchemachema),
      defaultValues: {
        saindo: "",
        indo: "",
      },
      mode: "onChange",
    });
  return { control, handleSubmit, reset, formState };
};
