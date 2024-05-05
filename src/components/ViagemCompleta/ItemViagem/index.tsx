import { Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ViagemCompleta } from "@/types";
import { Nav } from "@/Router";
import { ItemBox, ItemText, ItemTitle } from "../../../globalStyles/item";
import { Share_Deleta } from "./components/Share_Deleta";

type Props = {
  itemCompleta: ViagemCompleta;
};

export const ItemViagemCompleta: React.FC<Props> = ({ itemCompleta }) => {
  const navigation = useNavigation<Nav>();

  return (
    <ItemBox>
      <Pressable
        style={{ alignItems: "center", width: "100%" }}
        onPress={() =>
          itemCompleta &&
          navigation.navigate("AnotaçãoViagem", { item: itemCompleta })
        }
        android_ripple={{ color: "darkblue" }}
      >
        <ItemTitle>
          {itemCompleta.saindo} ={">"} {itemCompleta.indo}
        </ItemTitle>
        <ItemText>Data de Criação: {itemCompleta.dataCriacao}</ItemText>

        <Share_Deleta itemCompleta={itemCompleta} />
      </Pressable>
    </ItemBox>
  );
};
