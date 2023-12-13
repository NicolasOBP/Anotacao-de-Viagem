import React, { useState } from "react";
import Chegada from "../../../../components/ColecaoViagem/Chegada";
import { ContainerBtn, TextBtn } from "../../../../globalStyles/style";

type Props = {
  tipoEstado?: "Ida" | "Volta";
};
export default function Finalizar({ tipoEstado }: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Chegada
        showModal={showModal}
        setShowModal={setShowModal}
        tipoEstado={tipoEstado}
      />

      <ContainerBtn onPress={() => setShowModal(true)}>
        <TextBtn>Finalizar</TextBtn>
      </ContainerBtn>
    </>
  );
}
