import { useForm } from "react-hook-form";

export default function useHookFormPerfil() {
  const { control } = useForm({
    defaultValues: {
      email: "",
      username: "",
    },
  });
  return { control };
}
