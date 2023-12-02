import { useForm } from "react-hook-form";
import {
  ViagmeCompletaSchema,
  viagemComepltaSchemachema,
} from "./viagemCompletaSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function useHookFormViagemCompleta() {
  const { control, handleSubmit, reset, formState } =
    useForm<ViagmeCompletaSchema>({
      resolver: zodResolver(viagemComepltaSchemachema),
      defaultValues: {
        saindoDe: "",
        indoPara: "",
      },
      mode: "onChange",
    });
  return { control, handleSubmit, reset, formState };
}
