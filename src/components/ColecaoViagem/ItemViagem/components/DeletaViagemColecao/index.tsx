import { View } from "react-native";
import React, { useState } from "react";
import ModalConfirmaDeletar from "../../../../ModalConfirmaDeleta";
import { NovaViagem } from "../../../../../types/colecaoViagem";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  itemColecao: NovaViagem;
};

export default function DeletaViagemColecao({ itemColecao }: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ModalConfirmaDeletar
        setShowModal={setShowModal}
        showModal={showModal}
        tipoDel="ColecaoViagem"
        id={itemColecao.id}
        idPai={itemColecao.idPai}
        statusViagem={itemColecao.status}
      />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
        }}
      >
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
    </>
  );
}
