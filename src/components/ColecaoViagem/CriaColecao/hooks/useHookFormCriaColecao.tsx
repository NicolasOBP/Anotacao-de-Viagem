import { useForm } from "react-hook-form";
import { CriaColecaoSchema, criaColecaoSchemamema } from "./criaColecaoSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function useHookFormCriaColecao() {
  const { control, handleSubmit, reset, formState } =
    useForm<CriaColecaoSchema>({
      defaultValues: {
        saindo: "",
        indo: "",
      },
      mode: "onChange",
      resolver: zodResolver(criaColecaoSchemamema),
    });
  return { control, handleSubmit, reset, formState };
}
