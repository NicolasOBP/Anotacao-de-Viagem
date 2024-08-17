import { UseFormReset } from "react-hook-form";
import { useAnotacaoIda, useAnotacaoVolta } from "./";
import { itemAnotacaoColecao } from "../types";

export const useAddAnotacaoColecao = (
  closeModal: () => void,
  reset: UseFormReset<itemAnotacaoColecao>,
  tipo: "Ida" | "Volta"
) => {
  const { anotacaoIda } = useAnotacaoIda();
  const { anotacaoVolta } = useAnotacaoVolta();

  function addAnotacao(item: itemAnotacaoColecao) {
    if (tipo === "Ida") anotacaoIda(item);
    if (tipo === "Volta") anotacaoVolta(item);

    reset();
    closeModal();
  }

  return { addAnotacao };
};
