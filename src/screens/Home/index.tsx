import React from "react";
import { Container, FlatList, Title } from "../../globalStyles/style";
import { usePegaColecaoViagem } from "./hooks/usePegaColecaoViagem";
import NovaColecao from "./components/NovaColeção";
import { ItemInicial } from "../../components/ColecaoViagem/ItemInicial";
import { ColecaoViagem } from "../../types/colecaoViagem";

export default function Home() {
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
}
