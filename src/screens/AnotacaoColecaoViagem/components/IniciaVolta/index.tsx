import React from "react";
import { ContainerBtn, TextBtn } from "../../../../globalStyles/style";
import { NovaViagem } from "@/types";
import { useIniciaVolta } from "../../hooks/useIniciaVolta";

type Props = {
  item: NovaViagem;
};

export const IniciaVolta: React.FC<Props> = ({ item }) => {
  const { iniciaVolta } = useIniciaVolta(item);
  return (
    <ContainerBtn style={{ marginTop: 5 }} onPress={iniciaVolta}>
      <TextBtn>Iniciar Volta da Viagem</TextBtn>
    </ContainerBtn>
  );
};
