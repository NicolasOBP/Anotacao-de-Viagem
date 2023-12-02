import { useForm } from "react-hook-form";
import {
  ComecaTerminaSchema,
  comecaTerminaSchemachema,
} from "./ComecaTerminaSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function useHookFormComecaTermina() {
  const { control, handleSubmit, formState, reset } =
    useForm<ComecaTerminaSchema>({
      defaultValues: {
        gasto: 0,
        descricaoExtra: "",
      },
      resolver: zodResolver(comecaTerminaSchemachema),
      mode: "onChange",
    });
  return { control, handleSubmit, formState, reset };
}
