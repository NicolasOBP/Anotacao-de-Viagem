import { View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { ModalConfirmaDeletar } from "@/components";
import { ColecaoViagem } from "@/types";

type Props = {
  itemColecao: ColecaoViagem;
};

export const DeletaColecao: React.FC<Props> = ({ itemColecao }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ModalConfirmaDeletar
        setShowModal={setShowModal}
        showModal={showModal}
        tipoDel="Colecao"
        id={itemColecao.id}
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
