import { create } from "zustand";
import { User } from "../types/user";
import { ViagemCompleta } from "../types/viagemCompleta";

type State = {
  user: User | null;
  anonymousId: string;
  viagemCompletaStore: ViagemCompleta;
  theme: "light" | "dark";
};

type Action = {
  setUser: (user: User) => void;
  setAnonymousId: (anonymousId: string) => void;
  setViagemCompleta: (viagemCompletaStore: ViagemCompleta) => void;
  setTheme: (theme: "light" | "dark") => void;
};

export const useDadosStore = create<State & Action>((set) => ({
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

  anonymousId: "",
  setAnonymousId: (anonymousId) => set({ anonymousId }),

  theme: "light",
  setTheme: (theme) => set({ theme }),
}));
