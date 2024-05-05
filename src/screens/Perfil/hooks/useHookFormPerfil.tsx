import { useForm } from "react-hook-form";

export const useHookFormPerfil = () => {
  const { control } = useForm({
    defaultValues: {
      email: "",
      username: "",
    },
  });
  return { control };
};
