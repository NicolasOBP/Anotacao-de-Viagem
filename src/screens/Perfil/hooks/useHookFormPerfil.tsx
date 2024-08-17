import { useForm } from "react-hook-form";
import { PerfilSchema } from "./perfilSchema";

export const useHookFormPerfil = () => {
  const { control } = useForm<PerfilSchema>({
    defaultValues: {
      email: "",
      username: "",
    },
  });
  return { control };
};
