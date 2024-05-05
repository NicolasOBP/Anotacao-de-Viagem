import { View, Pressable } from "react-native";
import React from "react";
import { ItemBox, ItemText, ItemTitle } from "../../../globalStyles/item";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "@/Router";

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
  itemAnotacaoColecao?: item;
};

export const ItemAnotacaoColecao: React.FC<Props> = ({
  itemAnotacaoColecao,
}) => {
  const navigation = useNavigation<Nav>();

  return (
    <ItemBox>
      <Pressable
        style={{ alignItems: "center", width: "100%" }}
        android_ripple={{ color: "darkblue" }}
        onPress={() =>
          itemAnotacaoColecao &&
          navigation.navigate("RevisãoAnotação", { item: itemAnotacaoColecao })
        }
      >
        <ItemTitle>
          Referência: {itemAnotacaoColecao?.PontoReferencia}
        </ItemTitle>
        <View style={{ marginBottom: 10 }}>
          <ItemText>
            Data e Hora: {itemAnotacaoColecao?.data} -{" "}
            {itemAnotacaoColecao?.hora}
          </ItemText>
        </View>
      </Pressable>
    </ItemBox>
  );
};
