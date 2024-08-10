import React from "react";
import { BoxInfo } from "@/globalStyles/style";
import { ItemText, ItemTitle } from "@/globalStyles/item";
import { useDadosStore } from "@/context";

export const ItemChegadaVolta: React.FC = () => {
  const { dadosColecaoViagemStore } = useDadosStore();

  return (
    <BoxInfo>
      <ItemTitle>Chegada</ItemTitle>
      <ItemText>Hora: {dadosColecaoViagemStore.volta.horaChegada}</ItemText>
      {dadosColecaoViagemStore.volta.descricaoChegada && (
        <ItemText>
          Descricao Extra: {dadosColecaoViagemStore.volta.descricaoChegada}
        </ItemText>
      )}
      {dadosColecaoViagemStore.volta.gastos && (
        <ItemText>Gastos: R${dadosColecaoViagemStore.volta.gastos}</ItemText>
      )}
    </BoxInfo>
  );
};
