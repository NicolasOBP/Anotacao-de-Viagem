import { Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "@/Router";
import { ItemBox, ItemTitle } from "../../../globalStyles/item";
import { ColecaoViagem } from "@/types";
import { DeletaColecao } from "./components/Deletar";

type Props = {
  itemColecao: ColecaoViagem;
};

export const ItemInicial: React.FC<Props> = ({ itemColecao }) => {
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
};
