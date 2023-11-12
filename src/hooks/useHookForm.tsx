import { useForm } from "react-hook-form";

export default function useHookForm() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      saindoDe: "",
      indoPara: "",
      kmPercorrido: "",
      veloVia: "",
      veloMedia: "",
      consumo: "",
      ar: "",
      descricaoExtra: "",
      pontoReferencia: "",
      gastos: "",
    },
  });
  return { handleSubmit, control, reset, errors };
}
