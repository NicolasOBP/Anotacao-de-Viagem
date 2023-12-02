import { View, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useDadosStore } from "../../../context/dadosStore";
import { shareAnotacaoViagemCompelta } from "../../../utils/Share/shareAnotacaoViagemCompleta";
import { RootStackParamListStack } from "../../../Router/types/stack";
import { ItemBox, ItemText, ItemTitle } from "../../../globalStyles/item";

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

type Nav = NavigationProp<RootStackParamListStack>;

export function ItemCompleta({ itemAnotacaoCompleta }: Props) {
  const navigation = useNavigation<Nav>();
  const { viagemCompletaStore } = useDadosStore();
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
        <View
          style={{
            alignSelf: "flex-start",
          }}
        >
          <FontAwesome
            onPress={async () =>
              await shareAnotacaoViagemCompelta(
                itemAnotacaoCompleta,
                viagemCompletaStore.saindo + " para " + viagemCompletaStore.indo
              )
            }
            name="share-square-o"
            size={24}
            color="black"
          />
        </View>
      </Pressable>
    </ItemBox>
  );
}
