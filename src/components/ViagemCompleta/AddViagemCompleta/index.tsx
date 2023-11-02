import React from "react";
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
import useHookForm from "../../../hooks/useHookForm";
import { propsHookForm } from "../../../types/hookForm";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
};

export default function AddViaCompletaa({ setShowModal, showModal }: Props) {
  const { handleSubmit, control, reset } = useHookForm();
  const { addAnotacao } = useCriaViagemCompleta(setShowModal, reset);

  function AddAnotacao(data: propsHookForm) {
    let item = {
      saindo: data.saindoDe,
      indo: data.indoPara,
    };

    addAnotacao(item);
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
    setShowModal(false);
  }

  return (
    <Modal animationType="fade" transparent={true} visible={showModal}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={modalcss.container2}>
          <View style={modalcss.box}>
            <Text style={modalcss.title}>Adicionar uma nova Anotação</Text>

            <Input label="Saindo de:" name="saindoDe" control={control} />
            <Input label="Indo para:" name="indoPara" control={control} />

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
                onPress={handleSubmit(AddAnotacao)}
              >
                <Text style={globalcss.textBtn}>Adicionar</Text>
              </Pressable>

              <Pressable
                style={globalcss.conteinerBtncancel}
                android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                onPress={cancelar}
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
