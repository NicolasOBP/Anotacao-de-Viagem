import React, { useState } from "react";
import {
  Modal,
  Pressable,
  Text,
  View,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Input from "../../Input";
import { globalcss } from "../../../globalStyles/style";
import { modalcss } from "../../../globalStyles/modal";
import { useAddViagemAvulsa } from "./hooks/useAddAnotacaoAvulsa";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
};
export default function AddViaAvulsa({ setShowModal, showModal }: Props) {
  const [sai, setSai] = useState("");
  const [indo, setIndo] = useState("");
  const [kmper, setKmper] = useState("");
  const [veloVia, setVeloVia] = useState("");
  const [veloFeita, setVeloFeita] = useState("");
  const [consumo, setConsumo] = useState("");
  const [ar, setAr] = useState("");
  const [desc, setDesc] = useState("");

  const { addAnotacao } = useAddViagemAvulsa(setShowModal, setDesc);

  function AddAnotacao() {
    let item = {
      saindo: sai,
      indo,
      KmPercorrido: kmper,
      VeloFeita: veloVia,
      VeloVia: veloFeita,
      consumo,
      ar,
      descricao: desc,
    };

    addAnotacao(item);
  }

  return (
    <Modal animationType="fade" transparent={true} visible={showModal}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={modalcss.container}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <View style={modalcss.box}>
            <Text style={modalcss.title}>Adicionar uma nova Anotação</Text>

            <Input label="Saindo de:" setInfo={setSai} />
            <Input label="Indo para:" setInfo={setIndo} />
            <Input
              label="Km percorrido:"
              setInfo={setKmper}
              placeholder="Só número"
            />
            <Input
              label="Velocidade na Via:"
              setInfo={setVeloVia}
              placeholder="Só número"
            />
            <Input
              label="Velocidade média:"
              setInfo={setVeloFeita}
              placeholder="Só número"
            />
            <Input
              label="Consumo (Km/L):"
              setInfo={setConsumo}
              placeholder="Só número"
            />
            <Input label="Ar:" setInfo={setAr} placeholder="Só número" />
            <Input
              label="Descrição extra:"
              setInfo={setDesc}
              placeholder="Opicional"
            />

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
        </ScrollView>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
