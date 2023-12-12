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

export default function Volta({ colecao, item }: Props) {
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
            tipo: "Volta",
            colecao: colecao,
          })
        }
      >
        <ItemTitle>Volta</ItemTitle>
        <ItemText>
          Data: {dadosAtualizados.volta.data}
          {"\n"} Hora: {dadosAtualizados.volta.hora}
        </ItemText>
      </Pressable>
    </BoxInfo>
  );
}
