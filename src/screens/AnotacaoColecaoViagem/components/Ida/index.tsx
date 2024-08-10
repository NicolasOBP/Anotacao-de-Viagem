import { Pressable } from "react-native";
import React from "react";
import { ItemText, ItemTitle } from "@/globalStyles/item";
import { BoxInfo } from "@/globalStyles/style";
import { ColecaoViagem, NovaViagem } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "@/Router";
import { useAtualizaDadosViagem } from "@/hooks";

type Props = {
  colecao: ColecaoViagem;
  item: NovaViagem;
};

export const Ida: React.FC<Props> = ({ colecao, item }) => {
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
};
