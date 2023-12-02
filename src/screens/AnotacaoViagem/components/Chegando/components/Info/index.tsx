import React from "react";
import { ItemText, ItemTitle } from "../../../../../../globalStyles/item";
import { Check } from "../../../../../../types/viagemCompleta";
import { BoxInfo } from "../../../../../../globalStyles/style";

type Props = {
  chegando: Check;
};

export default function Info({ chegando }: Props) {
  return (
    <BoxInfo>
      <ItemTitle>Chegada</ItemTitle>

      <ItemText>
        Hora e data: {chegando.hora} ={">"} {chegando.data}
      </ItemText>

      {chegando.gastos && <ItemText>Gastos: {chegando.gastos}</ItemText>}

      {chegando.descricaoExtra && (
        <ItemText>Descrição extra: {chegando.descricaoExtra}</ItemText>
      )}
    </BoxInfo>
  );
}
