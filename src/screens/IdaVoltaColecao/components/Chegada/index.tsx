import React from "react";
import { Chegada } from "@/components";
import { ContainerBtn, TextBtn } from "@/globalStyles/style";
import { useShowModal } from "@/hooks";

type Props = {
  tipoEstado?: "Ida" | "Volta";
};
export const Finalizar: React.FC<Props> = ({ tipoEstado }) => {
  const { closeModal, openModal, showModal } = useShowModal();

  return (
    <>
      <Chegada
        showModal={showModal}
        closeModal={closeModal}
        tipoEstado={tipoEstado}
      />

      <ContainerBtn onPress={() => openModal()}>
        <TextBtn>Finalizar</TextBtn>
      </ContainerBtn>
    </>
  );
};
