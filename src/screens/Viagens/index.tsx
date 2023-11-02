import { View, Text, FlatList } from "react-native";
import React from "react";
import { globalcss } from "../../globalStyles/style";
import { ViagemCompleta } from "../../types/viagemCompleta";
import { ItemViagemCompleta } from "../../components/ViagemCompleta/ItemViagem";
import { usePegaAnotacaoCompleta } from "./hooks/usePegaViagem";

export default function Viagem() {
  const { viagemCompleta } = usePegaAnotacaoCompleta();
  return (
    <View style={globalcss.container}>
      <Text style={globalcss.title}>Suas Viagens</Text>

      <FlatList
        style={{ width: "80%" }}
        data={viagemCompleta}
        renderItem={({ item }: { item: ViagemCompleta }) => (
          <ItemViagemCompleta itemCompleta={item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
