import { View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { ModalConfirmaDeletar } from "@/components";
import { shareViagemCompleta } from "@/utils";
import { ViagemCompleta } from "@/types";

type Props = {
  itemCompleta: ViagemCompleta;
};

export const Share_Deleta: React.FC<Props> = ({ itemCompleta }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ModalConfirmaDeletar
        setShowModal={setShowModal}
        showModal={showModal}
        tipoDel="Viagem"
        id={itemCompleta.id}
      />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 10,
        }}
      >
        {itemCompleta.finalizado && (
          <View style={{ width: "10%" }}>
            <FontAwesome
              onPress={async () => await shareViagemCompleta(itemCompleta)}
              name="share-square-o"
              size={30}
              color="black"
            />
          </View>
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
    </>
  );
};
