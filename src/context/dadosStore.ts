import { create } from "zustand";
import { User } from "../types/user";
import { ViagemCompleta } from "../types/viagemCompleta";

type DadosStore = {
  user: User | null;
  setUser: (user: User) => void;

  viagemCompletaStore: ViagemCompleta;
  setViagemCompleta: (viagemCompletaStore: ViagemCompleta) => void;
};

export const useDadosStore = create<DadosStore>((set) => ({
  user: { displayName: "", email: "", photo: "", id: "" },
  setUser: (user) => set({ user }),

  viagemCompletaStore: {
    anotacao: [
      {
        ar: "",
        consumo: "",
        data: "",
        hora: "",
        KmPercorrido: "",
        PontoReferencia: "",
        VeloFeita: "",
        VeloVia: "",
      },
    ],
    id: "",
    chegando: { data: "", descricaoExtra: "", hora: "" },
    dataCriacao: "",
    indo: "",
    partindo: { data: "", descricaoExtra: "", hora: "" },
    saindo: "",
    finalizado: false,
  },
  setViagemCompleta: (viagemCompletaStore) => set({ viagemCompletaStore }),
}));
