import { View, Pressable } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ViagemAvulsa } from "../../../types/viagemAvulsa";
import { RootStackParamListStack } from "../../../Router/types/stack";
import { ItemBox, ItemText, ItemTitle } from "../../../globalStyles/item";
import Share_Trash from "./components/Share&Trash";

type Props = {
  itemAvulsa?: ViagemAvulsa;
};

type Nav = NavigationProp<RootStackParamListStack>;

export function ItemAvulsa({ itemAvulsa }: Props) {
  const navigation = useNavigation<Nav>();

  return (
    <ItemBox>
      <Pressable
        style={{ alignItems: "center", width: "100%" }}
        onPress={() =>
          itemAvulsa &&
          navigation.navigate("RevisãoAvulsa", { item: itemAvulsa })
        }
        android_ripple={{ color: "darkblue" }}
      >
        <ItemTitle>
          {itemAvulsa?.saindo} ={">"} {itemAvulsa?.indo}
        </ItemTitle>
        <View style={{ marginBottom: 10 }}>
          <ItemText>
            Data e Hora: {itemAvulsa?.data} - {itemAvulsa?.hora}
          </ItemText>
        </View>

        <Share_Trash itemAvulsa={itemAvulsa} />
      </Pressable>
    </ItemBox>
  );
}
