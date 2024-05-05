import React, { useState } from "react";
import { ContainerBtn, TextBtn } from "../../../../globalStyles/style";
import { CriaColecaoViagem } from "@/components";

export const NovaColecao: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ContainerBtn
        android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
        onPress={() => setShowModal(true)}
      >
        <TextBtn>Criar uma nova Coleção</TextBtn>
      </ContainerBtn>
      <CriaColecaoViagem setShowModal={setShowModal} showModal={showModal} />
    </>
  );
};
