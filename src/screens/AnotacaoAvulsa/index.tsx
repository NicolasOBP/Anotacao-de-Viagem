import React from "react";
import NovaAnotacao from "./components/NovaAnotacao";
import { Container, Title } from "../../globalStyles/style";
import { FlatList } from "react-native-gesture-handler";
import { ItemAvulsa } from "../../components/ViagemAvulsa/ItemViagem";
import { ViagemAvulsa } from "../../types/viagemAvulsa";
import { usePegaAnotacaoAvulsa } from "./hooks/usePegaAnotacaoAvulsa";

export default function AnotacaoAvulsa() {
  const { viagemAvulsa } = usePegaAnotacaoAvulsa();

  return (
    <Container>
      <Title>Anotação Avulsa</Title>

      <NovaAnotacao />

      <FlatList
        data={viagemAvulsa}
        renderItem={({ item }) => <ItemAvulsa itemAvulsa={item} />}
        keyExtractor={(item: ViagemAvulsa) => item.id}
      />
    </Container>
  );
}
