import React from "react";
import { Container, FlatList, Title } from "../../globalStyles/style";
import { ViagemCompleta } from "@/types";
import { ItemViagemCompleta } from "@/components";
import { usePegaAnotacaoCompleta } from "./hooks/usePegaViagem";
import { NovaViagem } from "./components/NovaViagem";

export const Viagem: React.FC = () => {
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
};
