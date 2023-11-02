import React, { useState } from "react";
import {
  Modal,
  Pressable,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Input from "../../Input";
import { modalcss } from "../../../globalStyles/modal";
import { globalcss } from "../../../globalStyles/style";
import { useCriaViagemCompleta } from "./hooks/useCriaViagemCompleta";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
};

export default function AddViaCompletaa({ setShowModal, showModal }: Props) {
  const [sai, setSai] = useState("");
  const [indo, setIndo] = useState("");

  const { addAnotacao } = useCriaViagemCompleta(setShowModal);

  function AddAnotacao() {
    let item = {
      saindo: sai,
      indo,
    };

    addAnotacao(item);
  }

  return (
    <Modal animationType="fade" transparent={true} visible={showModal}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={modalcss.container2}>
          <View style={modalcss.box}>
            <Text style={modalcss.title}>Adicionar uma nova Anotação</Text>

            <Input label="Saindo de:" setInfo={setSai} />
            <Input label="Indo para:" setInfo={setIndo} />

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
                onPress={AddAnotacao}
              >
                <Text style={globalcss.textBtn}>Adicionar</Text>
              </Pressable>

              <Pressable
                style={globalcss.conteinerBtncancel}
                android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                onPress={() => setShowModal(false)}
              >
                <Text style={globalcss.textBtn}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
