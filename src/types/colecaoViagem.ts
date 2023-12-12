export type ColecaoViagem = {
  saindo: string;
  indo: string;
  id: string;
  acontecendo: boolean;
};
export type NovaViagem = {
  id: string;
  idPai: string;
  dataCriacao: string;
  ida: {
    hora: string;
    data: string;
    anotacao: [Anotacao];
    horaChegada: string;
  };
  volta: {
    hora: string;
    data: string;
    anotacao: [Anotacao];
    horaChegada: string;
  };
  status: Status;
};

type Anotacao = {
  PontoReferencia: string;
  KmPercorrido: string;
  VeloFeita: string;
  VeloVia: string;
  consumo: string;
  ar: string;
  descricao?: string;
  hora: string;
  data: string;
};

export type Status =
  | "Não iniciado"
  | "Iniciado, ida"
  | "Ida finalizado, volta não"
  | "Iniciado, volta"
  | "Finalizado";
