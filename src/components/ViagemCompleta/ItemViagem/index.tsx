import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ViagemCompleta } from "../../../types/viagemCompleta";
import { itemcss } from "../../../globalStyles/item";
import { shareViagemCompleta } from "../../../utils/Share/shareViagemCompleta";
import ModalConfirmaDeletar from "../../ModalConfirmaDeleta";
import { RootStackParamListStack } from "../../../Router/types/stack";

type Props = {
  itemCompleta?: ViagemCompleta;
};

type Nav = NavigationProp<RootStackParamListStack>;

export function ItemViagemCompleta({ itemCompleta }: Props) {
  const navigation = useNavigation<Nav>();
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={itemcss.itemBox}>
      <Pressable
        style={{ alignItems: "center", width: "100%" }}
        onPress={() =>
          itemCompleta &&
          navigation.navigate("AnotaçãoViagem", { item: itemCompleta })
        }
        android_ripple={{ color: "darkblue" }}
      >
        <Text style={itemcss.itemTitle}>
          {itemCompleta?.saindo} ={">"} {itemCompleta?.indo}
        </Text>
        <Text style={itemcss.itemItem}>
          Data de Criação: {itemCompleta?.dataCriacao}
        </Text>

        <ModalConfirmaDeletar
          setShowModal={setShowModal}
          showModal={showModal}
          tipoAvulsa={false}
          id={itemCompleta!.id}
        />

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginTop: 10,
          }}
        >
          {itemCompleta?.finalizado ? (
            <View style={{ width: "10%" }}>
              <FontAwesome
                onPress={async () => await shareViagemCompleta(itemCompleta)}
                name="share-square-o"
                size={30}
                color="black"
              />
            </View>
          ) : (
            <></>
          )}
          <View
            style={{
              width: "90%",
              alignItems: "flex-end",
            }}
          >
            <FontAwesome
              onPress={() => setShowModal(true)}
              name="trash"
              size={30}
              color="red"
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
}
