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
import useHookForm from "../../../hooks/useHookForm";
import { propsHookForm } from "../../../types/hookForm";

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

  const { handleSubmit, control, reset } = useHookForm();
  const { addAnotacao } = useUpdateAnotacaoCompleta(setShowModal, reset);

  function adicionar(data: propsHookForm) {
    addAnotacao(data.descricaoExtra, tipoTermina);
    setShowInput(false);
  }

  function cancelar() {
    reset({
      saindoDe: "",
      indoPara: "",
      kmPercorrido: "",
      veloVia: "",
      veloMedia: "",
      consumo: "",
      ar: "",
      descricaoExtra: "",
      pontoReferencia: "",
    });
    setShowInput(false);
    setShowModal(false);
  }

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
                <Input
                  label="Descrição extra"
                  control={control}
                  name="descricaoExtra"
                />
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
                    onPress={handleSubmit(adicionar)}
                  >
                    <Text style={globalcss.textBtn}>Confirmar</Text>
                  </Pressable>
                  <Pressable
                    style={globalcss.conteinerBtn}
                    android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                    onPress={cancelar}
                  >
                    <Text style={globalcss.textBtn}>Cancelar</Text>
                  </Pressable>
                  <Pressable
                    style={globalcss.conteinerBtncancel}
                    android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                    onPress={cancelar}
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
                  onPress={handleSubmit(adicionar)}
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
