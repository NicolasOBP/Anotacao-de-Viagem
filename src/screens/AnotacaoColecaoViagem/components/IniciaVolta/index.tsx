import React from "react";
import { ContainerBtn, TextBtn } from "../../../../globalStyles/style";
import { NovaViagem } from "../../../../types/colecaoViagem";
import useIniciaVolta from "../../hooks/useIniciaVolta";

type Props = {
  item: NovaViagem;
};

export default function IniciaVolta({ item }: Props) {
  const { iniciaVolta } = useIniciaVolta(item);
  return (
    <ContainerBtn style={{ marginTop: 5 }} onPress={iniciaVolta}>
      <TextBtn>Iniciar Volta da Viagem</TextBtn>
    </ContainerBtn>
  );
}
