type Check = {
  data: string;
  hora: string;
  descricaoExtra: string;
  gastos?: string;
};

export type AnotacaoCompleta = {
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

export type ViagemCompleta = {
  saindo: string;
  indo: string;
  partindo: Check | null;
  anotacao: [AnotacaoCompleta];
  chegando: Check | null;
  id: string;
  dataCriacao: string;
  finalizado: boolean;
};
