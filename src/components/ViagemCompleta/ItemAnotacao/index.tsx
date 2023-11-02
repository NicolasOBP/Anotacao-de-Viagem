import { View, Text, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useDadosStore } from "../../../context/dadosStore";
import { RootStackParamList } from "../../../Router/stackNav";
import { itemcss } from "../../../globalStyles/item";
import { shareAnotacaoViagemCompelta } from "../../../utils/Share/shareAnotacaoViagemCompleta";

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

type Nav = NavigationProp<RootStackParamList>;

export function ItemCompleta({ itemAnotacaoCompleta }: Props) {
  const navigation = useNavigation<Nav>();
  const { viagemCompletaStore } = useDadosStore();
  return (
    <View style={itemcss.itemBox}>
      <Pressable
        style={{ alignItems: "center", width: "100%" }}
        android_ripple={{ color: "darkblue" }}
        onPress={() =>
          itemAnotacaoCompleta &&
          navigation.navigate("RevisãoAnotação", { item: itemAnotacaoCompleta })
        }
      >
        <Text style={itemcss.itemTitle}>
          Referência: {itemAnotacaoCompleta?.PontoReferencia}
        </Text>
        <View style={{ marginBottom: 10 }}>
          <Text style={itemcss.itemItem}>
            Data e Hora: {itemAnotacaoCompleta?.data} -{" "}
            {itemAnotacaoCompleta?.hora}
          </Text>
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
    </View>
  );
}
