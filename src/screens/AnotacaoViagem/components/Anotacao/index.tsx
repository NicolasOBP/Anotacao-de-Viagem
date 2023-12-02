import React, { useState } from "react";
import {
  ContainerBtn,
  FlatList,
  TextBtn,
} from "../../../../globalStyles/style";
import { ItemCompleta } from "../../../../components/ViagemCompleta/ItemAnotacao";
import { AnotacaoCompleta, Check } from "../../../../types/viagemCompleta";
import AddAnotacaoCompleta from "../../../../components/ViagemCompleta/AddAnotacao";

type Props = {
  partindo: Check;
  chegando: Check;
  anotacao: [AnotacaoCompleta];
};

export default function Anotacao({ anotacao, chegando, partindo }: Props) {
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
}
