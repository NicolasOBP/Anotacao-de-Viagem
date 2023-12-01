import React, { useState } from "react";
import { ViagemAvulsa } from "../../types/viagemAvulsa";
import AddViaAvulsa from "../../components/ViagemAvulsa/AddViagemAvulsa";
import {
  Container,
  ContainerBtn,
  FlatList,
  TextBtn,
  Title,
} from "../../globalStyles/style";
import AddViaCompletaa from "../../components/ViagemCompleta/AddViagemCompleta";
import { ItemAvulsa } from "../../components/ViagemAvulsa/ItemViagem";
import { usePegaAnotacaoAvulsa } from "./hooks/usePegaAnotacaoAvulsa";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showModalViagem, setShowModalViagem] = useState(false);

  const { viagemAvulsa } = usePegaAnotacaoAvulsa();

  return (
    <Container>
      <Title>Anotações de Viagem</Title>
      <ContainerBtn
        android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
        onPress={() => setShowModalViagem(true)}
      >
        <TextBtn>Nova Viagem</TextBtn>
      </ContainerBtn>

      <ContainerBtn
        android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
        onPress={() => setShowModal(true)}
      >
        <TextBtn>Anotação de Viagem avulsa</TextBtn>
      </ContainerBtn>

      <AddViaAvulsa setShowModal={setShowModal} showModal={showModal} />
      <AddViaCompletaa
        setShowModal={setShowModalViagem}
        showModal={showModalViagem}
      />

      <FlatList
        data={viagemAvulsa}
        renderItem={({ item }) => <ItemAvulsa itemAvulsa={item} />}
        keyExtractor={(item: ViagemAvulsa) => item.id}
      />
    </Container>
  );
}
