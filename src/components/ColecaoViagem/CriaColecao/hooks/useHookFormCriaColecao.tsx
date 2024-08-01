import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CriaColecaoSchema, criaColecaoSchemamema } from "./";

export const useHookFormCriaColecao = () => {
  const { control, handleSubmit, reset, formState }: FieldValues =
    useForm<CriaColecaoSchema>({
      defaultValues: {
        saindo: "",
        indo: "",
      },
      mode: "onChange",
      resolver: zodResolver(criaColecaoSchemamema),
    });
  return { control, handleSubmit, reset, formState };
};
