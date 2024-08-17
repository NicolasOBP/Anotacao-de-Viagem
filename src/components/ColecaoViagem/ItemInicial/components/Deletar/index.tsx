import { View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { ModalConfirmaDeletar } from "@/components";
import { ColecaoViagem } from "@/types";
import { useShowModal } from "@/hooks";

type Props = {
  itemColecao: ColecaoViagem;
};

export const DeletaColecao: React.FC<Props> = ({ itemColecao }) => {
  const { closeModal, openModal, showModal } = useShowModal();

  return (
    <>
      <ModalConfirmaDeletar
        closeModal={closeModal}
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
            onPress={() => openModal()}
            name="trash"
            size={30}
            color="red"
          />
        </View>
      </View>
    </>
  );
};
