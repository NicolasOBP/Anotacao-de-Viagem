import { View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ViagemAvulsa } from "@/types";
import { Nav } from "@/Router";
import { ItemBox, ItemText, ItemTitle } from "@/globalStyles/item";
import { Share_Trash } from "./components/Share&Trash";

type Props = {
  itemAvulsa?: ViagemAvulsa;
};

export const ItemAvulsa: React.FC<Props> = ({ itemAvulsa }) => {
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

        <Share_Trash itemAvulsa={itemAvulsa!} />
      </Pressable>
    </ItemBox>
  );
};
