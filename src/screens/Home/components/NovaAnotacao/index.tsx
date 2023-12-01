import React, { useState } from "react";
import { ContainerBtn, TextBtn } from "../../../../globalStyles/style";
import AddViaAvulsa from "../../../../components/ViagemAvulsa/AddViagemAvulsa";

export default function NovaAnotacao() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ContainerBtn
        android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
        onPress={() => setShowModal(true)}
      >
        <TextBtn>Anotação de Viagem avulsa</TextBtn>
      </ContainerBtn>
      <AddViaAvulsa setShowModal={setShowModal} showModal={showModal} />
    </>
  );
}
