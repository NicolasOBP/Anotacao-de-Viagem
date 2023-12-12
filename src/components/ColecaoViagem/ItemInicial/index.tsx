import { Pressable } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamListStack } from "../../../Router/types/stack";
import { ItemBox, ItemTitle } from "../../../globalStyles/item";
import { ColecaoViagem } from "../../../types/colecaoViagem";
import DeletaColecao from "./components/Deletar";

type Props = {
  itemColecao: ColecaoViagem;
};

type Nav = NavigationProp<RootStackParamListStack>;

export function ItemInicial({ itemColecao }: Props) {
  const navigation = useNavigation<Nav>();

  return (
    <ItemBox>
      <Pressable
        style={{ alignItems: "center", width: "100%" }}
        android_ripple={{ color: "darkblue" }}
        onPress={() =>
          navigation.navigate("ColecaoViagem", { item: itemColecao })
        }
      >
        <ItemTitle>
          Ida: {itemColecao?.saindo} ={">"} {itemColecao?.indo}
          {"\n"}
          Volta: {itemColecao?.indo} ={">"} {itemColecao?.saindo}
        </ItemTitle>
        <DeletaColecao itemColecao={itemColecao} />
      </Pressable>
    </ItemBox>
  );
}
