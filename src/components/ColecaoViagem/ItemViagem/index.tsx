import { Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "@/Router";
import { ItemBox, ItemTitle } from "@/globalStyles/item";
import { ColecaoViagem, NovaViagem } from "@/types";
import { DeletaViagemColecao } from "./components/DeletaViagemColecao";

type Props = {
  itemColecaoViagem: NovaViagem;
  colecaoViagem: ColecaoViagem;
};

export const ItemViagem: React.FC<Props> = ({
  itemColecaoViagem,
  colecaoViagem,
}) => {
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
};
