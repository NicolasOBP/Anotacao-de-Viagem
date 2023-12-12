import React from "react";
import { ContainerBtn, TextBtn } from "../../../../globalStyles/style";
import { ColecaoViagem } from "../../../../types/colecaoViagem";
import useCriaNovaViagem from "../../hooks/useCriaNovaViagem";

type Props = {
  item: ColecaoViagem;
};
export default function IniciaViagem({ item }: Props) {
  const { criaNovaaViagem } = useCriaNovaViagem();

  return (
    <>
      <ContainerBtn
        android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
        onPress={() => criaNovaaViagem(item)}
      >
        <TextBtn>Iniciar uma nova viagem</TextBtn>
      </ContainerBtn>
    </>
  );
}
