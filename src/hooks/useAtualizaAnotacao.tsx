import { useDadosStore } from "@/context";

type Item = {
  PontoReferencia?: string;
  KmPercorrido?: string;
  VeloVia?: string;
  VeloFeita?: string;
  consumo?: string;
  ar?: string;
  descricao?: string;
};

export const useAtualizaAnotacao = () => {
  const { dadosColecaoViagemStore } = useDadosStore();

  console.log(dadosColecaoViagemStore);

  function atualizaAnotacao(item: Item) {
    console.log(item);
  }

  return { atualizaAnotacao };
};
