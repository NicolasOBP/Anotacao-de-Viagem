import React, { useState } from "react";
import { ContainerBtn, TextBtn } from "../../../../globalStyles/style";
import AddAnotacaoColecao from "../../../../components/ColecaoViagem/AddAnotacao";

type Props = {
  tipo: "Ida" | "Volta";
};

export default function AddAnotacao({ tipo }: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ContainerBtn onPress={() => setShowModal(true)}>
        <TextBtn>Adicionar uma anotação</TextBtn>
      </ContainerBtn>

      <AddAnotacaoColecao
        setShowModal={setShowModal}
        showModal={showModal}
        tipo={tipo}
      />
    </>
  );
}
