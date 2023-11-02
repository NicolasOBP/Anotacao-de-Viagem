import { View, Text } from "react-native";
import React from "react";
import { revisaocss } from "./style";
import { FontAwesome } from "@expo/vector-icons";
import { globalcss } from "../../globalStyles/style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Router/stackNav";
import { useDadosStore } from "../../context/dadosStore";
import { shareAnotacaoViagemCompelta } from "../../utils/Share/shareAnotacaoViagemCompleta";

export type PropsNav = NativeStackScreenProps<
  RootStackParamList,
  "RevisãoAnotação"
>;

export default function RevisaoViagemCompleta({ route }: PropsNav) {
  const item = route.params.item;
  const { viagemCompletaStore } = useDadosStore();

  return (
    <View style={globalcss.container}>
      <Text style={globalcss.title}>Informações da Viagem</Text>
      <View style={revisaocss.boxInfo}>
        <Text style={revisaocss.textInfo}>
          Ponto de Referência:{" "}
          <Text style={{ fontWeight: "normal" }}>{item.PontoReferencia}</Text>
        </Text>
        <Text style={revisaocss.textInfo}>
          Km percorrido:{" "}
          <Text style={{ fontWeight: "normal" }}>{item.KmPercorrido} Km</Text>
        </Text>
        <Text style={revisaocss.textInfo}>
          Velocidade na via:{" "}
          <Text style={{ fontWeight: "normal" }}>{item.VeloVia} Km/h</Text>
        </Text>
        <Text style={revisaocss.textInfo}>
          Velocidade média:{" "}
          <Text style={{ fontWeight: "normal" }}>{item.VeloFeita} Km/h</Text>
        </Text>
        <Text style={revisaocss.textInfo}>
          Consumo:{" "}
          <Text style={{ fontWeight: "normal" }}>{item.consumo} Km/L</Text>
        </Text>
        <Text style={revisaocss.textInfo}>
          Ar condicionado:{" "}
          <Text style={{ fontWeight: "normal" }}>{item.ar}</Text>
        </Text>
        {item.descricao ? (
          <Text style={revisaocss.textInfo}>
            Descrção extra:{" "}
            <Text style={{ fontWeight: "normal" }}>{item.descricao}</Text>
          </Text>
        ) : (
          <></>
        )}
        <View
          style={{
            alignSelf: "flex-start",
          }}
        >
          <FontAwesome
            onPress={async () =>
              await shareAnotacaoViagemCompelta(
                item,
                viagemCompletaStore.saindo + " para " + viagemCompletaStore.indo
              )
            }
            name="share-square-o"
            size={24}
            color="black"
          />
        </View>
      </View>
    </View>
  );
}
