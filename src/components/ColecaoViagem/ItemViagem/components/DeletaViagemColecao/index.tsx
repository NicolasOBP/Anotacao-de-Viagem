import { View } from "react-native";
import React, { useState } from "react";
import { ModalConfirmaDeletar } from "@/components";
import { NovaViagem } from "@/types";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  itemColecao: NovaViagem;
};

export const DeletaViagemColecao: React.FC<Props> = ({ itemColecao }) => {
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
};
