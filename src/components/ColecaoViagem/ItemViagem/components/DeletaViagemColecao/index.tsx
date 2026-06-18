import { View } from "react-native";
import React from "react";
import { ModalConfirmaDeletar } from "@/components";
import { NovaViagem } from "@/types";
import { FontAwesome } from "@expo/vector-icons";
import { useShowModal } from "@/hooks";

type Props = {
  itemColecao: NovaViagem;
};

export const DeletaViagemColecao: React.FC<Props> = ({ itemColecao }) => {
  const { closeModal, openModal, showModal } = useShowModal();

  return (
    <>
      <ModalConfirmaDeletar
        closeModal={closeModal}
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
          <FontAwesome onPress={openModal} name="trash" size={30} color="red" />
        </View>
      </View>
    </>
  );
};
