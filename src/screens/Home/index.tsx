import React from "react";
import { ViagemAvulsa } from "../../types/viagemAvulsa";
import { Container, FlatList, Title } from "../../globalStyles/style";
import { ItemAvulsa } from "../../components/ViagemAvulsa/ItemViagem";
import { usePegaAnotacaoAvulsa } from "./hooks/usePegaAnotacaoAvulsa";
import NovaAnotacao from "./components/NovaAnotacao";
import NovaViagem from "./components/NovaViagem";

export default function Home() {
  const { viagemAvulsa } = usePegaAnotacaoAvulsa();

  return (
    <Container>
      <Title>Anotações de Viagem</Title>

      <NovaViagem />
      <NovaAnotacao />

      <FlatList
        data={viagemAvulsa}
        renderItem={({ item }) => <ItemAvulsa itemAvulsa={item} />}
        keyExtractor={(item: ViagemAvulsa) => item.id}
      />
    </Container>
  );
}
