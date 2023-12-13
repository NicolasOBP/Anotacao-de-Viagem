import React from "react";
import { BoxInfo } from "../../../../globalStyles/style";
import { ItemText, ItemTitle } from "../../../../globalStyles/item";
import { useDadosStore } from "../../../../context/dadosStore";

export default function ItemChegadaIda() {
  const { dadosColecaoViagemStore } = useDadosStore();

  return (
    <BoxInfo>
      <ItemTitle>Chegada</ItemTitle>
      <ItemText>Hora: {dadosColecaoViagemStore.ida.horaChegada}</ItemText>
      {dadosColecaoViagemStore.ida.descricaoChegada && (
        <ItemText>
          Descricao Extra: {dadosColecaoViagemStore.ida.descricaoChegada}
        </ItemText>
      )}
      {dadosColecaoViagemStore.ida.gastos && (
        <ItemText>Gastos: R${dadosColecaoViagemStore.ida.gastos}</ItemText>
      )}
    </BoxInfo>
  );
}
