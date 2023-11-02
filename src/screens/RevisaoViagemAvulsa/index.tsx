import { View, Text } from "react-native";
import React from "react";
import { revisaocss } from "./style";
import { FontAwesome } from "@expo/vector-icons";
import { globalcss } from "../../globalStyles/style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Router/stackNav";
import { share } from "../../utils/Share/shareViagemAvulsa";

export type PropsNav = NativeStackScreenProps<
  RootStackParamList,
  "RevisãoAvulsa"
>;

export default function RevisaoViagemAvulsa({ route }: PropsNav) {
  const item = route.params.item;

  return (
    <View style={globalcss.container}>
      <Text style={globalcss.title}>Informações da Viagem</Text>
      <View style={revisaocss.boxInfo}>
        <Text style={revisaocss.textInfo}>
          Saindo de: <Text style={{ fontWeight: "normal" }}>{item.saindo}</Text>
        </Text>
        <Text style={revisaocss.textInfo}>
          Indo para: <Text style={{ fontWeight: "normal" }}>{item.indo}</Text>
        </Text>
        <Text style={revisaocss.textInfo}>
          Km percorrido:{" "}
          <Text style={{ fontWeight: "normal" }}>{item.KmPercorrido} Km</Text>
        </Text>
        <Text style={revisaocss.textInfo}>
          Velocidade ná via:{" "}
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
            marginTop: 5,
          }}
        >
          <FontAwesome
            onPress={async () => await share(item)}
            name="share-square-o"
            size={24}
            color="black"
          />
        </View>
      </View>
    </View>
  );
}
