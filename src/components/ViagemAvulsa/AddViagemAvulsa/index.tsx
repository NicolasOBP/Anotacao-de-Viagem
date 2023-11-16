import React from "react";
import { Modal, View, Keyboard, TouchableWithoutFeedback } from "react-native";
import Input from "../../Input";
import {
  ContainerBtn,
  ContainerBtncancel,
  TextBtn,
  Title,
} from "../../../globalStyles/style";
import { useAddViagemAvulsa } from "./hooks/useAddAnotacaoAvulsa";
import useHookForm from "../../../hooks/useHookForm";
import { propsHookForm } from "../../../types/hookForm";
import { Box, Container } from "../../../globalStyles/modal";

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
      gastos: data?.gastos,
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
      gastos: "",
    });
    setShowModal(false);
  }

  return (
    <Modal animationType="fade" transparent={true} visible={showModal}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container contentContainerStyle={{ alignItems: "center" }}>
          <Box>
            <Title>Adicionar uma nova Anotação</Title>

            <Input label="Saindo de:" control={control} name="saindoDe" />
            <Input label="Indo para:" control={control} name="indoPara" />
            <Input
              label="Km percorrido:"
              control={control}
              placeholder="Só número"
              name="kmPercorrido"
              keyboardType="numeric"
            />
            <Input
              label="Velocidade na Via:"
              control={control}
              placeholder="Só número"
              name="veloVia"
              keyboardType="numeric"
            />
            <Input
              label="Velocidade média:"
              control={control}
              placeholder="Só número"
              name="veloMedia"
              keyboardType="numeric"
            />
            <Input
              label="Consumo (Km/L):"
              control={control}
              placeholder="Só número"
              name="consumo"
              keyboardType="numeric"
            />
            <Input
              label="Ar:"
              control={control}
              placeholder="Só número"
              name="ar"
              keyboardType="numeric"
            />
            <Input
              label="Gastos (R$):"
              control={control}
              placeholder="Só número, opcional"
              name="gastos"
              keyboardType="numeric"
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
              <ContainerBtn
                android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                onPress={handleSubmit(AddAnotacao)}
              >
                <TextBtn>Adicionar</TextBtn>
              </ContainerBtn>

              <ContainerBtncancel
                android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                onPress={cancelar}
              >
                <TextBtn>Cancelar</TextBtn>
              </ContainerBtncancel>
            </View>
          </Box>
        </Container>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
