import React from "react";
import { ItemText, ItemTitle } from "@/globalStyles/item";
import { Check } from "@/types";
import { BoxInfo } from "@/globalStyles/style";

type Props = {
  chegando: Check;
};

export const Info: React.FC<Props> = ({ chegando }) => {
  return (
    <BoxInfo>
      <ItemTitle>Chegada</ItemTitle>

      <ItemText>
        Hora e data: {chegando.hora} ={">"} {chegando.data}
      </ItemText>

      {chegando.gastos && <ItemText>Gastos: R${chegando.gastos}</ItemText>}

      {chegando.descricaoExtra && (
        <ItemText>Descrição extra: {chegando.descricaoExtra}</ItemText>
      )}
    </BoxInfo>
  );
};
