import React from "react";
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
import { useDadosStore } from "../../../context/dadosStore";
import { useAddAnotacaoCompleta } from "./hooks/useAddAnotacaoCompleta";
import useHookForm from "../../../hooks/useHookForm";
import { propsHookForm } from "../../../types/hookForm";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
};
export default function AddAnotacaoCompleta({
  setShowModal,
  showModal,
}: Props) {
  const { viagemCompletaStore } = useDadosStore();

  const { handleSubmit, control, reset } = useHookForm();
  const { addAnotacao } = useAddAnotacaoCompleta(setShowModal, reset);

  function AddAnotacao(data: propsHookForm) {
    let item = {
      PontoReferencia: data.pontoReferencia,
      KmPercorrido: data.kmPercorrido,
      VeloFeita: data.veloMedia,
      VeloVia: data.veloVia,
      consumo: data.consumo,
      ar: data.ar,
      descricao: data.descricaoExtra,
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
        <ScrollView
          style={modalcss.container}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <View style={modalcss.box}>
            <Text style={modalcss.title}>
              Adicionar uma Anotação na viagem {viagemCompletaStore.saindo} =
              {">"} {viagemCompletaStore.indo}
            </Text>

            <Input
              label="Ponto de referência:"
              control={control}
              name="pontoReferencia"
            />
            <Input
              label="Km percorrido:"
              control={control}
              placeholder="Só número"
              name="kmPercorrido"
            />
            <Input
              label="Velocidade na Via:"
              control={control}
              placeholder="Só número"
              name="veloVia"
            />
            <Input
              label="Velocidade média:"
              control={control}
              placeholder="Só número"
              name="veloMedia"
            />
            <Input
              label="Consumo (Km/L):"
              control={control}
              placeholder="Só número"
              name="consumo"
            />
            <Input
              label="Ar:"
              control={control}
              placeholder="Só número"
              name="ar"
            />
            <Input
              label="Descrição extra:"
              control={control}
              placeholder="Opicional"
              name="descricaoExtra"
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
        </ScrollView>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
