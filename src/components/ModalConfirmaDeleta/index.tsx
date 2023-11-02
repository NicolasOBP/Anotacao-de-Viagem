import React from "react";
import {
  Modal,
  Pressable,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { modalcss } from "../../globalStyles/modal";
import { globalcss } from "../../globalStyles/style";
import { useDeletaViagemCompleta } from "../ViagemCompleta/ItemViagem/hooks/useDeletaViagemCompleta";
import { useDeletaViagem } from "../ViagemAvulsa/ItemViagem/hooks/useDeletaViagemAvulsa";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  tipoAvulsa: boolean;
  id: string;
};

export default function ModalConfirmaDeletar({
  setShowModal,
  showModal,
  tipoAvulsa,
  id,
}: Props) {
  const { delAvulsa } = useDeletaViagem();
  const { delCompleta } = useDeletaViagemCompleta();
  return (
    <Modal animationType="fade" transparent={true} visible={showModal}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={modalcss.container2}>
          <View style={modalcss.box}>
            <Text style={modalcss.title}>Tem certeza que deseja deletar?</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
                padding: 4,
              }}
            >
              <Pressable
                style={globalcss.conteinerBtn}
                android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                onPress={() => setShowModal(false)}
              >
                <Text style={globalcss.textBtn}>Cancelar</Text>
              </Pressable>

              <Pressable
                style={globalcss.conteinerBtncancel}
                android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                onPress={() => (tipoAvulsa ? delAvulsa(id) : delCompleta(id))}
              >
                <Text style={globalcss.textBtn}>Deletar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
