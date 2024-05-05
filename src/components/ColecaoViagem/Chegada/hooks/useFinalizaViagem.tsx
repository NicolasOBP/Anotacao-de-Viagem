import { UseFormReset } from "react-hook-form";
import { useFinalizaViagemIda, useFinalizaViagemVolta } from "./";

type item = {
  descricaoChegada: string;
  gastos: string;
};

export const useFinalizaViagem = (
  tipo: "Ida" | "Volta",
  reset: UseFormReset<item>
) => {
  const { finalizaViagemIda } = useFinalizaViagemIda(reset);
  const { finalizaViagemVolta } = useFinalizaViagemVolta(reset);

  function finalizaViagem(item: item) {
    if (tipo === "Ida") finalizaViagemIda(item);
    if (tipo === "Volta") finalizaViagemVolta(item);
    reset({ descricaoChegada: "", gastos: "" });
  }
  return { finalizaViagem };
};
