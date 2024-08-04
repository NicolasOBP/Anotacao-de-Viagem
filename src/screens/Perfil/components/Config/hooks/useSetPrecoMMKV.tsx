import {
  etanolPreco,
  gasolinaPreco,
  storage,
  useToastDispatch,
} from "@/context";

type fuel = {
  Gasolina?: string | undefined;
  Etanol?: string | undefined;
};

export const useSetPrecoMMKV = () => {
  const { showToast } = useToastDispatch();

  function setPreco(data: fuel) {
    try {
      storage.set(etanolPreco, data!.Etanol!);
      storage.set(gasolinaPreco, data!.Gasolina!);

      showToast({ message: "Dados inseridos com sucesso!", type: "Success" });
    } catch (err) {
      showToast({ message: "Erro ao inserir dados", type: "Warning" });
    }
  }

  return { setPreco };
};
