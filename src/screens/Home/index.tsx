import React from "react";
import { Container, FlatList, Title } from "@/globalStyles/style";
import { usePegaColecaoViagem } from "./hooks/usePegaColecaoViagem";
import { NovaColecao } from "./components/NovaColeção";
import { ItemInicial } from "@/components";
import { ColecaoViagem } from "@/types";

export const Home: React.FC = () => {
  const { colecaoViagem } = usePegaColecaoViagem();

  return (
    <Container>
      <Title>Anotações de Viagem</Title>
      <Title>Coleção de Viagens</Title>

      <NovaColecao />

      <FlatList
        data={colecaoViagem}
        renderItem={({ item }) => <ItemInicial itemColecao={item} />}
        keyExtractor={(item: ColecaoViagem) => item.id}
      />
    </Container>
  );
};
