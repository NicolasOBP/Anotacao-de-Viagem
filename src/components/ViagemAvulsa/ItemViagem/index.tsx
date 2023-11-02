import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { share } from "../../../utils/Share/shareViagemAvulsa";
import { ViagemAvulsa } from "../../../types/viagemAvulsa";
import { RootStackParamList } from "../../../Router/stackNav";
import { itemcss } from "../../../globalStyles/item";
import ModalConfirmaDeletar from "../../ModalConfirmaDeleta";

type Props = {
  itemAvulsa?: ViagemAvulsa;
};

type Nav = NavigationProp<RootStackParamList>;

export function ItemAvulsa({ itemAvulsa }: Props) {
  const navigation = useNavigation<Nav>();
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={itemcss.itemBox}>
      <Pressable
        style={{ alignItems: "center", width: "100%" }}
        onPress={() =>
          itemAvulsa &&
          navigation.navigate("RevisãoAvulsa", { item: itemAvulsa })
        }
        android_ripple={{ color: "darkblue" }}
      >
        <Text style={itemcss.itemTitle}>
          {itemAvulsa?.saindo} ={">"} {itemAvulsa?.indo}
        </Text>
        <View style={{ marginBottom: 10 }}>
          <Text style={itemcss.itemItem}>
            Data e Hora: {itemAvulsa?.data} - {itemAvulsa?.hora}
          </Text>
        </View>

        <ModalConfirmaDeletar
          setShowModal={setShowModal}
          showModal={showModal}
          id={itemAvulsa!.id}
          tipoAvulsa={true}
        />

        <View
          style={{
            flexDirection: "row",
            width: "100%",
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
            }}
          >
            <FontAwesome
              onPress={async () => await share(itemAvulsa)}
              name="share-square-o"
              size={24}
              color="black"
            />
          </View>
          <View
            style={{
              width: "90%",
              alignItems: "flex-end",
            }}
          >
            <FontAwesome
              onPress={() => setShowModal(true)}
              name="trash"
              size={24}
              color="red"
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
}
