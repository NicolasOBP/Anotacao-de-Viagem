import React, { useState } from "react";
import {
  Modal,
  Keyboard,
  View,
  TouchableWithoutFeedback,
  Pressable,
  Text,
} from "react-native";
import { globalcss } from "../../../globalStyles/style";
import { modalcss } from "../../../globalStyles/modal";
import Input from "../../Input";
import { useUpdateAnotacaoCompleta } from "./hooks/useUpdateAnotacaoCompleta";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  tipoTermina: boolean;
};

export default function ComecaTermina({
  setShowModal,
  showModal,
  tipoTermina,
}: Props) {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [descricao, setDescricao] = useState<string>("");

  const { addAnotacao } = useUpdateAnotacaoCompleta(setShowModal, setDescricao);

  return (
    <Modal animationType="fade" transparent={true} visible={showModal}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={modalcss.container2}>
          <View style={modalcss.box}>
            <Text style={modalcss.title}>
              Depois que finalizar não poderá voltar.
            </Text>
            <Text style={modalcss.title}>
              Deseja adicionar uma descricao extra?
            </Text>

            {showInput ? (
              <View
                style={{
                  width: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Input label="Descrição extra" setInfo={setDescricao} />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    width: "100%",
                  }}
                >
                  <Pressable
                    style={globalcss.conteinerBtnconfirma}
                    android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                    onPress={() => {
                      addAnotacao(descricao, tipoTermina), setShowInput(false);
                    }}
                  >
                    <Text style={globalcss.textBtn}>Confirmar</Text>
                  </Pressable>
                  <Pressable
                    style={globalcss.conteinerBtn}
                    android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                    onPress={() => setShowInput(false)}
                  >
                    <Text style={globalcss.textBtn}>Cancelar</Text>
                  </Pressable>
                  <Pressable
                    style={globalcss.conteinerBtncancel}
                    android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                    onPress={() => setShowModal(false)}
                  >
                    <Text style={globalcss.textBtn}>Voltar</Text>
                  </Pressable>
                </View>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <Pressable
                  style={globalcss.conteinerBtnconfirma}
                  android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                  onPress={() => setShowInput(true)}
                >
                  <Text style={globalcss.textBtn}>Adicionar</Text>
                </Pressable>
                <Pressable
                  style={globalcss.conteinerBtn}
                  android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                  onPress={() => addAnotacao(descricao, tipoTermina)}
                >
                  <Text style={globalcss.textBtn}>Não adicionar</Text>
                </Pressable>
                <Pressable
                  style={globalcss.conteinerBtncancel}
                  android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                  onPress={() => setShowModal(false)}
                >
                  <Text style={globalcss.textBtn}>Voltar</Text>
                </Pressable>
              </View>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
