import React, { useState } from "react";
import {
  ContainerBtn,
  FlatList,
  TextBtn,
} from "../../../../globalStyles/style";
import { AnotacaoCompleta, Check } from "@/types";
import { AddAnotacaoCompleta, ItemCompleta } from "@/components";

type Props = {
  partindo: Check | null;
  chegando: Check | null;
  anotacao: [AnotacaoCompleta];
};

export const Anotacao: React.FC<Props> = ({ anotacao, chegando, partindo }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {partindo && !chegando && (
        <ContainerBtn onPress={() => setShowModal(true)}>
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

      <AddAnotacaoCompleta setShowModal={setShowModal} showModal={showModal} />
    </>
  );
};
