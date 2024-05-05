import { View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { shareAnotacaoViagemCompelta } from "@/utils";
import { useDadosStore } from "@/context";

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
  itemAnotacaoCompleta: item;
};

export const ShareComponent: React.FC<Props> = ({ itemAnotacaoCompleta }) => {
  const { viagemCompletaStore } = useDadosStore();
  return (
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
  );
};
