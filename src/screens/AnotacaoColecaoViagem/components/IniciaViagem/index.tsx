import React from "react";
import { ContainerBtn, TextBtn } from "../../../../globalStyles/style";
import { NovaViagem } from "@/types";
import { useIniciaViagem } from "../../hooks/useIniciaViagem";

type Props = {
  item: NovaViagem;
};
export const IniciaViagem: React.FC<Props> = ({ item }) => {
  const { iniciaViagem } = useIniciaViagem(item);

  return (
    <ContainerBtn style={{ marginTop: 5 }} onPress={iniciaViagem}>
      <TextBtn>Iniciar Viagem</TextBtn>
    </ContainerBtn>
  );
};
