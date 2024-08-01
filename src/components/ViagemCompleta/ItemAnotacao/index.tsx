import { View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "@/Router";
import { ItemBox, ItemText, ItemTitle } from "@/globalStyles/item";
import { ShareComponent } from "./components/Share";

type item = {
  PontoReferencia: string;
  KmPercorrido: string;
  VeloFeita: string;
  VeloVia: string;
  consumo: string;
  ar: string;
  descricao?: string | undefined;
  hora: string;
  data: string;
};
type Props = {
  itemAnotacaoCompleta?: item;
};

export const ItemCompleta: React.FC<Props> = ({ itemAnotacaoCompleta }) => {
  const navigation = useNavigation<Nav>();

  return (
    <ItemBox>
      <Pressable
        style={{ alignItems: "center", width: "100%" }}
        android_ripple={{ color: "darkblue" }}
        onPress={() =>
          itemAnotacaoCompleta &&
          navigation.navigate("RevisãoAnotação", { item: itemAnotacaoCompleta })
        }
      >
        <ItemTitle>
          Referência: {itemAnotacaoCompleta?.PontoReferencia}
        </ItemTitle>
        <View style={{ marginBottom: 10 }}>
          <ItemText>
            Data e Hora: {itemAnotacaoCompleta?.data} -{" "}
            {itemAnotacaoCompleta?.hora}
          </ItemText>
        </View>

        <ShareComponent itemAnotacaoCompleta={itemAnotacaoCompleta!} />
      </Pressable>
    </ItemBox>
  );
};
