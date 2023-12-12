import { Pressable } from "react-native";
import React from "react";
import { ItemText, ItemTitle } from "../../../../globalStyles/item";
import { BoxInfo } from "../../../../globalStyles/style";
import { ColecaoViagem, NovaViagem } from "../../../../types/colecaoViagem";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamListStack } from "../../../../Router/types/stack";
import useAtualizaDadosViagem from "../../hooks/useAtualizaDadosViagem";

type Props = {
  colecao: ColecaoViagem;
  item: NovaViagem;
};

type Nav = NavigationProp<RootStackParamListStack>;

export default function Ida({ colecao, item }: Props) {
  const navigation = useNavigation<Nav>();
  const { dadosAtualizados } = useAtualizaDadosViagem(item);

  if (!dadosAtualizados) return null;

  return (
    <BoxInfo style={{ marginTop: 20 }}>
      <Pressable
        style={{ alignItems: "center", width: "100%" }}
        android_ripple={{ color: "darkblue" }}
        onPress={() =>
          navigation.navigate("IdaVoltaColecao", {
            tipo: "Ida",
            colecao: colecao,
          })
        }
      >
        <ItemTitle>Ida</ItemTitle>
        <ItemText>
          Data: {dadosAtualizados.ida.data}
          {"\n"} Hora: {dadosAtualizados.ida.hora}
        </ItemText>
      </Pressable>
    </BoxInfo>
  );
}
