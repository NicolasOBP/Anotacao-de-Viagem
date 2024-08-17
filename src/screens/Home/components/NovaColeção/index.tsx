import React from "react";
import { ContainerBtn, TextBtn } from "@/globalStyles/style";
import { CriaColecaoViagem } from "@/components";
import { useShowModal } from "@/hooks";

export const NovaColecao: React.FC = () => {
  const { closeModal, openModal, showModal } = useShowModal();

  return (
    <>
      <ContainerBtn
        android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
        onPress={() => openModal()}
      >
        <TextBtn>Criar uma nova Coleção</TextBtn>
      </ContainerBtn>
      <CriaColecaoViagem closeModal={closeModal} showModal={showModal} />
    </>
  );
};
