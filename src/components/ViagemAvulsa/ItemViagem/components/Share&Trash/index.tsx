import { View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { share } from "../../../../../utils/Share/shareViagemAvulsa";
import { ViagemAvulsa } from "../../../../../types/viagemAvulsa";
import ModalConfirmaDeletar from "../../../../ModalConfirmaDeleta";

type Props = {
  itemAvulsa: ViagemAvulsa;
};

export default function Share_Trash({ itemAvulsa }: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
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

      <ModalConfirmaDeletar
        setShowModal={setShowModal}
        showModal={showModal}
        id={itemAvulsa!.id}
        tipoAvulsa={true}
      />
    </>
  );
}
