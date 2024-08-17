import React from "react";
import { ContainerBtn, FlatList, TextBtn } from "@/globalStyles/style";
import { AnotacaoCompleta, Check } from "@/types";
import { AddAnotacaoCompleta, ItemCompleta } from "@/components";
import { useShowModal } from "@/hooks";

type Props = {
  partindo: Check | null;
  chegando: Check | null;
  anotacao: [AnotacaoCompleta];
};

export const Anotacao: React.FC<Props> = ({ anotacao, chegando, partindo }) => {
  const { closeModal, openModal, showModal } = useShowModal();

  return (
    <>
      {partindo && !chegando && (
        <ContainerBtn onPress={() => openModal()}>
          <TextBtn>Adicionar uma anotação</TextBtn>
        </ContainerBtn>
      )}

      {anotacao && (
        <FlatList
          style={{ flex: 1 }}
          data={anotacao}
          renderItem={({ item }) => (
            <ItemCompleta itemAnotacaoCompleta={item} />
          )}
        />
      )}

      <AddAnotacaoCompleta closeModal={closeModal} showModal={showModal} />
    </>
  );
};
