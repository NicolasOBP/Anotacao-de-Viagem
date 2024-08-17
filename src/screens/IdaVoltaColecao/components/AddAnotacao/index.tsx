import React from "react";
import { ContainerBtn, TextBtn } from "@/globalStyles/style";
import { AddAnotacaoColecao } from "@/components";
import { useShowModal } from "@/hooks";

type Props = {
  tipo: "Ida" | "Volta";
};

export const AddAnotacao: React.FC<Props> = ({ tipo }) => {
  const { closeModal, openModal, showModal } = useShowModal();

  return (
    <>
      <ContainerBtn onPress={() => openModal()}>
        <TextBtn>Adicionar uma anotação</TextBtn>
      </ContainerBtn>

      <AddAnotacaoColecao
        closeModal={closeModal}
        showModal={showModal}
        tipo={tipo}
      />
    </>
  );
};
