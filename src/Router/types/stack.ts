import { AnotacaoCompleta, ViagemCompleta } from "../../types/viagemCompleta";
import { ViagemAvulsa } from "../../types/viagemAvulsa";
import { ColecaoViagem, NovaViagem, Status } from "../../types/colecaoViagem";

export type RootStackParamListStack = {
  Tela: undefined;
  RevisãoAvulsa: { item: ViagemAvulsa };
  AnotaçãoViagem: { item: ViagemCompleta };
  RevisãoAnotação: { item: AnotacaoCompleta };
  ColecaoViagem: { item: ColecaoViagem };
  AnotacaoColecaoViagem: { item: NovaViagem } & { colecao: ColecaoViagem };
  IdaVoltaColecao: { tipo: "Ida" | "Volta" } & { colecao: ColecaoViagem };
};
