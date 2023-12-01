import React from "react";
import {
  ItemBox,
  ItemText,
  ItemTitle,
} from "../../../../../../globalStyles/item";
import { Check } from "../../../../../../types/viagemCompleta";

type Props = {
  chegando: Check;
};

export default function Info({ chegando }: Props) {
  return (
    <ItemBox>
      <ItemTitle>Chegada</ItemTitle>

      <ItemText>
        Hora e data: {chegando.hora} ={">"} {chegando.data}
      </ItemText>

      {chegando.gastos && <ItemText>Gastos: {chegando.gastos}</ItemText>}

      {chegando.descricaoExtra && (
        <ItemText>Descrição extra: {chegando.descricaoExtra}</ItemText>
      )}
    </ItemBox>
  );
}
