import React, { useState } from "react";
import { Chegada } from "@/components";
import { ContainerBtn, TextBtn } from "../../../../globalStyles/style";

type Props = {
  tipoEstado?: "Ida" | "Volta";
};
export const Finalizar: React.FC<Props> = ({ tipoEstado }) => {
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
};
