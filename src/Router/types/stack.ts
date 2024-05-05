import * as Type from "@/types";

export type RootStackParamListStack = {
  Tela: undefined;
  RevisãoAvulsa: { item: Type.ViagemAvulsa };
  AnotaçãoViagem: { item: Type.ViagemCompleta };
  RevisãoAnotação: { item: Type.AnotacaoCompleta };
  ColecaoViagem: { item: Type.ColecaoViagem };
  AnotacaoColecaoViagem: { item: Type.NovaViagem } & {
    colecao: Type.ColecaoViagem;
  };
  IdaVoltaColecao: { tipo: "Ida" | "Volta" } & { colecao: Type.ColecaoViagem };
};
