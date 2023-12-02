import { View, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ViagemCompleta } from "../../../types/viagemCompleta";
import { shareViagemCompleta } from "../../../utils/Share/shareViagemCompleta";
import ModalConfirmaDeletar from "../../ModalConfirmaDeleta";
import { RootStackParamListStack } from "../../../Router/types/stack";
import { ItemBox, ItemText, ItemTitle } from "../../../globalStyles/item";

type Props = {
  itemCompleta?: ViagemCompleta;
};

type Nav = NavigationProp<RootStackParamListStack>;

export function ItemViagemCompleta({ itemCompleta }: Props) {
  const navigation = useNavigation<Nav>();
  const [showModal, setShowModal] = useState(false);

  return (
    <ItemBox>
      <Pressable
        style={{ alignItems: "center", width: "100%" }}
        onPress={() =>
          itemCompleta &&
          navigation.navigate("AnotaçãoViagem", { item: itemCompleta })
        }
        android_ripple={{ color: "darkblue" }}
      >
        <ItemTitle>
          {itemCompleta?.saindo} ={">"} {itemCompleta?.indo}
        </ItemTitle>
        <ItemText>Data de Criação: {itemCompleta?.dataCriacao}</ItemText>

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
    </ItemBox>
  );
}
