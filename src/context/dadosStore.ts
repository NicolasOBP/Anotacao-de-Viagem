import { create } from "zustand";
import { User, ViagemCompleta, Status, NovaViagem } from "@/types";

type State = {
  user: User | null;
  anonymousId: string;
  viagemCompletaStore: ViagemCompleta;
  theme: "light" | "dark";
  colecaoStatusStore: Status;
  dadosColecaoViagemStore: NovaViagem;
};

type Action = {
  setUser: (user: User) => void;
  setAnonymousId: (anonymousId: string) => void;
  setViagemCompleta: (viagemCompletaStore: ViagemCompleta) => void;
  setTheme: (theme: "light" | "dark") => void;
  setColecoStatusStore: (colecaoStatusStore: Status) => void;
  setDadosColecaoViagem: (dadosColecaoViagemStore: NovaViagem) => void;
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

  colecaoStatusStore: "Não iniciado",
  setColecoStatusStore: (colecaoStatusStore) => set({ colecaoStatusStore }),

  dadosColecaoViagemStore: {
    dataCriacao: "",
    status: "Não iniciado",
    id: "",
    idPai: "",
    ida: {
      data: "",
      hora: "",
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
          descricao: "",
        },
      ],
      horaChegada: "",
      descricaoChegada: "",
      gastos: "",
    },
    volta: {
      hora: "",
      data: "",
      horaChegada: "",
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
          descricao: "",
        },
      ],
      descricaoChegada: "",
      gastos: "",
    },
  },
  setDadosColecaoViagem: (dadosColecaoViagemStore) =>
    set({ dadosColecaoViagemStore }),
}));
