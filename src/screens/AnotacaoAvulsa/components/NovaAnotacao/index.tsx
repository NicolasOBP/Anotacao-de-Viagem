import React from "react";
import { ContainerBtn, TextBtn } from "@/globalStyles/style";
import { AddViaAvulsa } from "@/components";
import { useShowModal } from "@/hooks";

export const NovaAnotacao: React.FC = () => {
  const { showModal, openModal, closeModal } = useShowModal();

  return (
    <>
      <ContainerBtn
        android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
        onPress={() => openModal()}
      >
        <TextBtn>Anotação de Viagem avulsa</TextBtn>
      </ContainerBtn>
      <AddViaAvulsa closeModal={closeModal} showModal={showModal} />
    </>
  );
};
