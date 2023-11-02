import { AnotacaoCompleta, ViagemCompleta } from "../../types/viagemCompleta";
import { ViagemAvulsa } from "../../types/viagemAvulsa";

export type RootStackParamListStack = {
  Tela: undefined;
  RevisãoAvulsa: { item: ViagemAvulsa };
  AnotaçãoViagem: { item: ViagemCompleta };
  RevisãoAnotação: { item: AnotacaoCompleta };
};
