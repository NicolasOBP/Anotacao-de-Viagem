import { Pressable } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamListStack } from "../../../Router/types/stack";
import { ItemBox, ItemTitle } from "../../../globalStyles/item";
import { ColecaoViagem, NovaViagem } from "../../../types/colecaoViagem";
import DeletaViagemColecao from "./components/DeletaViagemColecao";

type Props = {
  itemColecaoViagem: NovaViagem;
  colecaoViagem: ColecaoViagem;
};

type Nav = NavigationProp<RootStackParamListStack>;

export function ItemViagem({ itemColecaoViagem, colecaoViagem }: Props) {
  const navigation = useNavigation<Nav>();

  return (
    <ItemBox>
      <Pressable
        style={{ alignItems: "center", width: "100%" }}
        android_ripple={{ color: "darkblue" }}
        onPress={() =>
          navigation.navigate("AnotacaoColecaoViagem", {
            item: itemColecaoViagem,
            colecao: colecaoViagem,
          })
        }
      >
        <ItemTitle>
          Data de criação: {itemColecaoViagem.dataCriacao}
          {"\n"}
          Status: {itemColecaoViagem.status}
        </ItemTitle>

        <DeletaViagemColecao itemColecao={itemColecaoViagem} />
      </Pressable>
    </ItemBox>
  );
}
