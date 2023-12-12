import React from "react";
import { Container, FlatList, Title } from "../../globalStyles/style";
import { ViagemCompleta } from "../../types/viagemCompleta";
import { ItemViagemCompleta } from "../../components/ViagemCompleta/ItemViagem";
import { usePegaAnotacaoCompleta } from "./hooks/usePegaViagem";
import NovaViagem from "./components/NovaViagem";

export default function Viagem() {
  const { viagemCompleta } = usePegaAnotacaoCompleta();
  return (
    <Container>
      <Title>Viagens Avulsas</Title>

      <NovaViagem />

      <FlatList
        data={viagemCompleta}
        renderItem={({ item }) => <ItemViagemCompleta itemCompleta={item} />}
        keyExtractor={(item: ViagemCompleta) => item.id}
      />
    </Container>
  );
}
