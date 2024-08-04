import { FieldValues, useForm } from "react-hook-form";

export const useHookFormPerfil = () => {
  const { control }: FieldValues = useForm({
    defaultValues: {
      email: "",
      username: "",
    },
  });
  return { control };
};
