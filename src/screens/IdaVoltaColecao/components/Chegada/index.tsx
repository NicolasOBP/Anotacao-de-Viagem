import React from "react";
import { BoxInfo, ContainerBtn, TextBtn } from "../../../../globalStyles/style";
import useFinalizaViagem from "./hooks/useFinalizaViagem";
import { useDadosStore } from "../../../../context/dadosStore";
import { ItemText, ItemTitle } from "../../../../globalStyles/item";

type Props = {
  tipo: "Item" | "Botao";
  tipoEstado?: "Ida" | "Volta";
};
export default function Finalizar({ tipo, tipoEstado }: Props) {
  const { finalizaViagem } = useFinalizaViagem(tipoEstado);
  const { dadosColecaoViagemStore } = useDadosStore();

  if (tipo === "Botao")
    return (
      <ContainerBtn onPress={finalizaViagem}>
        <TextBtn>Finalizar</TextBtn>
      </ContainerBtn>
    );

  if (tipo === "Item")
    return (
      <BoxInfo>
        <ItemTitle>Chegada</ItemTitle>
        <ItemText>Hora: {dadosColecaoViagemStore.ida.horaChegada}</ItemText>
      </BoxInfo>
    );
}
