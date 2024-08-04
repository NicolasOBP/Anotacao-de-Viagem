import { useForm } from "react-hook-form";
import { configSchema, ConfigSchema } from "./configSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { etanolPreco, gasolinaPreco, storage } from "@/context";

export const useHookFormPreco = () => {
  const { control, formState, handleSubmit } = useForm<ConfigSchema>({
    resolver: zodResolver(configSchema),
    defaultValues: {
      Gasolina: storage.getString(gasolinaPreco),
      Etanol: storage.getString(etanolPreco),
    },
    mode: "onChange",
  });
  return { control, formState, handleSubmit };
};
