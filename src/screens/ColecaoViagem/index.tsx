import React from "react";
import { PropsNav } from "@/Router/types/screenProps";
import { Container, FlatList, Title } from "../../globalStyles/style";
import { IniciaViagem } from "./components/NovaColeção";
import usePegaViagens from "./hooks/usePegaViagens";
import { NovaViagem } from "@/types";
import { ItemViagem } from "@/components";
import useAtualizaColecao from "./hooks/useAtualizaColecao";

export const ColecaoViagem: React.FC<PropsNav<"ColecaoViagem">> = ({
  route,
}) => {
  const colecao = route.params.item;
  const { viagens } = usePegaViagens(colecao);
  const { acontecendo } = useAtualizaColecao(colecao);

  return (
    <Container>
      <Title>
        {colecao.saindo} para {colecao.indo};{"\n"}
        {colecao.indo} para {colecao.saindo}
      </Title>

      {!acontecendo && <IniciaViagem item={colecao} />}

      <FlatList
        data={viagens}
        renderItem={({ item }) => (
          <ItemViagem itemColecaoViagem={item} colecaoViagem={colecao} />
        )}
        keyExtractor={(item: NovaViagem) => item.id}
      />
    </Container>
  );
};
