import React from "react";
import { ContainerBtn, TextBtn } from "../../../../globalStyles/style";
import { NovaViagem } from "../../../../types/colecaoViagem";
import useIniciaViagem from "../../hooks/useIniciaViagem";

type Props = {
  item: NovaViagem;
};
export default function IniciaViagem({ item }: Props) {
  const { iniciaViagem } = useIniciaViagem(item);

  return (
    <ContainerBtn style={{ marginTop: 5 }} onPress={iniciaViagem}>
      <TextBtn>Iniciar Viagem</TextBtn>
    </ContainerBtn>
  );
}
