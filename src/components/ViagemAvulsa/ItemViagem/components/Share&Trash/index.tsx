import { View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { ViagemAvulsa } from "@/types";
import { share } from "@/utils";
import { ModalConfirmaDeletar } from "@/components";

type Props = {
  itemAvulsa: ViagemAvulsa;
};

export const Share_Trash: React.FC<Props> = ({ itemAvulsa }) => {
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
        tipoDel="Anotacao"
      />
    </>
  );
};
