import React from "react";
import { AddViaCompleta } from "@/components";
import { ContainerBtn, TextBtn } from "@/globalStyles/style";
import { useShowModal } from "@/hooks";

export const NovaViagem: React.FC = () => {
  const { showModal, closeModal, openModal } = useShowModal();

  return (
    <>
      <ContainerBtn
        android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
        onPress={() => openModal()}
      >
        <TextBtn>Nova Viagem</TextBtn>
      </ContainerBtn>
      <AddViaCompleta closeModal={closeModal} showModal={showModal} />
    </>
  );
};
