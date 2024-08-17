import { UseFormReset } from "react-hook-form";
import { useAnotacaoIda, useAnotacaoVolta } from "./";
import { itemAnotacaoColecao, reset } from "../types";

export const useAddAnotacaoColecao = (
  closeModal: () => void,
  reset: UseFormReset<reset>,
  tipo: "Ida" | "Volta"
) => {
  const { anotacaoIda } = useAnotacaoIda();
  const { anotacaoVolta } = useAnotacaoVolta();

  function addAnotacao(item: itemAnotacaoColecao) {
    if (tipo === "Ida") anotacaoIda(item);
    if (tipo === "Volta") anotacaoVolta(item);

    reset({
      pontoReferencia: "",
      kmPercorrido: "",
      veloVia: "",
      veloMedia: "",
      consumo: "",
      ar: "",
      descricaoExtra: "",
    });
    closeModal();
  }

  return { addAnotacao };
};
