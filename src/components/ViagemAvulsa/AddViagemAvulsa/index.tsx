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
import { useAddViagemAvulsa } from "./hooks/useAddAnotacaoAvulsa";
import useHookForm from "../../../hooks/useHookForm";
import { propsHookForm } from "../../../types/hookForm";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
};
export default function AddViaAvulsa({ setShowModal, showModal }: Props) {
  const { handleSubmit, control, reset } = useHookForm();

  const { addAnotacao } = useAddViagemAvulsa(setShowModal, reset);

  function AddAnotacao(data: propsHookForm) {
    let item = {
      saindo: data.saindoDe,
      indo: data.indoPara,
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
            <Text style={modalcss.title}>Adicionar uma nova Anotação</Text>

            <Input label="Saindo de:" control={control} name="saindoDe" />
            <Input label="Indo para:" control={control} name="indoPara" />
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
