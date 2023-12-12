import { UseFormReset } from "react-hook-form";
import useAnotacaoIda from "./useAnotacaoIda";
import useAnotacaoVolta from "./useAnotacaoVolta";

type reset = {
  pontoReferencia: string;
  kmPercorrido: string;
  veloMedia: string;
  veloVia: string;
  consumo: string;
  ar: string;
  descricaoExtra: string;
};
type itemAnotacaoColecao = {
  PontoReferencia: string;
  KmPercorrido: string;
  VeloFeita: string;
  VeloVia: string;
  consumo: string;
  ar: string;
  descricao?: string;
};
export function useAddAnotacaoColecao(
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  reset: UseFormReset<reset>,
  tipo: "Ida" | "Volta"
) {
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
    setShowModal(false);
  }

  return { addAnotacao };
}
