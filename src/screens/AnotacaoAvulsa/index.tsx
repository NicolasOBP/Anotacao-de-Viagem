import React from "react";
import { NovaAnotacao } from "./components/NovaAnotacao";
import { Container, Title } from "../../globalStyles/style";
import { FlatList } from "react-native-gesture-handler";
import { ItemAvulsa } from "@/components";
import { ViagemAvulsa } from "@/types";
import { usePegaAnotacaoAvulsa } from "./hooks/usePegaAnotacaoAvulsa";

export const AnotacaoAvulsa: React.FC = () => {
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
};
