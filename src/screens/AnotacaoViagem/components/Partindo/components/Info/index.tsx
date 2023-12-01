import React from "react";
import { BoxInfo } from "../../../../../../globalStyles/style";
import { ItemText, ItemTitle } from "../../../../../../globalStyles/item";
import { Check } from "../../../../../../types/viagemCompleta";

type Props = {
  partindo: Check;
};

export default function Info({ partindo }: Props) {
  return (
    <BoxInfo>
      <ItemTitle>Partida</ItemTitle>

      <ItemText>
        Hora e data: {partindo.hora} ={">"} {partindo.data}
      </ItemText>

      {partindo.descricaoExtra && (
        <ItemText>Descrição extra: {partindo.descricaoExtra}</ItemText>
      )}
    </BoxInfo>
  );
}
