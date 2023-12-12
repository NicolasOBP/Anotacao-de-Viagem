import React, { useState } from "react";
import AddViaCompleta from "../../../../components/ViagemCompleta/AddViagemCompleta";
import { ContainerBtn, TextBtn } from "../../../../globalStyles/style";

export default function NovaViagem() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ContainerBtn
        android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
        onPress={() => setShowModal(true)}
      >
        <TextBtn>Nova Viagem</TextBtn>
      </ContainerBtn>
      <AddViaCompleta setShowModal={setShowModal} showModal={showModal} />
    </>
  );
}
