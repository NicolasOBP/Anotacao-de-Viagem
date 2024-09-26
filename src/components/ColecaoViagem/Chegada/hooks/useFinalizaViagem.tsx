import { UseFormReset } from "react-hook-form";
import { useFinalizaViagemIda, useFinalizaViagemVolta } from "./";
import { item } from "../types";

export const useFinalizaViagem = (
  tipo: "Ida" | "Volta",
  reset: UseFormReset<item>
) => {
  const { finalizaViagemIda } = useFinalizaViagemIda(reset);
  const { finalizaViagemVolta } = useFinalizaViagemVolta(reset);

  function finalizaViagem(item: item) {
    if (tipo === "Ida") finalizaViagemIda(item);
    if (tipo === "Volta") finalizaViagemVolta(item);
    reset();
  }
  return { finalizaViagem };
};
