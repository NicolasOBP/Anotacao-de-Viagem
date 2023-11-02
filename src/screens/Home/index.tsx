import { View, Text, Pressable, FlatList } from "react-native";
import React, { useState } from "react";
import { ViagemAvulsa } from "../../types/viagemAvulsa";
import AddViaAvulsa from "../../components/ViagemAvulsa/AddViagemAvulsa";
import { globalcss } from "../../globalStyles/style";
import AddViaCompletaa from "../../components/ViagemCompleta/AddViagemCompleta";
import { ItemAvulsa } from "../../components/ViagemAvulsa/ItemViagem";
import { usePegaAnotacaoAvulsa } from "./hooks/usePegaAnotacaoAvulsa";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showModalViagem, setShowModalViagem] = useState(false);

  const { viagemAvulsa } = usePegaAnotacaoAvulsa();

  return (
    <View style={globalcss.container}>
      <Text style={globalcss.title}>Anotações de Viagem</Text>
      <Pressable
        style={globalcss.conteinerBtn}
        android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
        onPress={() => setShowModalViagem(true)}
      >
        <Text style={globalcss.textBtn}>Nova Viagem</Text>
      </Pressable>

      <Pressable
        style={globalcss.conteinerBtn}
        android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
        onPress={() => setShowModal(true)}
      >
        <Text style={globalcss.textBtn}>Anotação de Viagem avulsa</Text>
      </Pressable>

      <AddViaAvulsa setShowModal={setShowModal} showModal={showModal} />
      <AddViaCompletaa
        setShowModal={setShowModalViagem}
        showModal={showModalViagem}
      />

      <FlatList
        style={{ width: "80%" }}
        data={viagemAvulsa}
        renderItem={({ item }: { item: ViagemAvulsa }) => (
          <ItemAvulsa itemAvulsa={item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
