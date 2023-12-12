import React from "react";
import { Modal, Keyboard, TouchableWithoutFeedback } from "react-native";
import Input from "../../Input";
import { useDadosStore } from "../../../context/dadosStore";
import { useAddAnotacaoCompleta } from "./hooks/useAddAnotacaoCompleta";
import {
  ContainerBtn,
  ContainerBtncancel,
  TextBtn,
  Title,
} from "../../../globalStyles/style";
import { Box, Container } from "../../../globalStyles/modal";
import useHookFormAnotacaoCompleta from "./hooks/useHookFormAnotacaoCompleta";
import { BoxBtns } from "./style";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
};
export default function AddAnotacaoCompleta({
  setShowModal,
  showModal,
}: Props) {
  const { viagemCompletaStore } = useDadosStore();

  const { handleSubmit, control, reset, formState } =
    useHookFormAnotacaoCompleta();
  const { addAnotacao } = useAddAnotacaoCompleta(setShowModal, reset);

  function AddAnotacao(data) {
    addAnotacao(data);
  }

  function cancelar() {
    reset({
      KmPercorrido: "",
      VeloVia: "",
      VeloFeita: "",
      consumo: "",
      ar: "",
      descricao: "",
      PontoReferencia: "",
    });
    setShowModal(false);
  }

  return (
    <Modal animationType="fade" transparent={true} visible={showModal}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container contentContainerStyle={{ alignItems: "center" }}>
          <Box>
            <Title>
              Adicionar uma Anotação na viagem {viagemCompletaStore.saindo} =
              {">"} {viagemCompletaStore.indo}
            </Title>

            <Input
              label="Ponto de referência:"
              control={control}
              name="PontoReferencia"
            />
            <Input
              label="Km percorrido:"
              control={control}
              placeholder="Só número"
              name="KmPercorrido"
              keyboardType="numeric"
            />
            <Input
              label="Velocidade na Via:"
              control={control}
              placeholder="Só número"
              name="VeloVia"
              keyboardType="numeric"
            />
            <Input
              label="Velocidade média:"
              control={control}
              placeholder="Só número"
              name="VeloFeita"
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
              label="Descrição extra:"
              control={control}
              placeholder="Opicional"
              name="descricao"
            />

            <BoxBtns>
              <ContainerBtn
                android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                onPress={handleSubmit(AddAnotacao)}
                disabled={!formState.isValid}
              >
                <TextBtn>Adicionar</TextBtn>
              </ContainerBtn>

              <ContainerBtncancel
                android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                onPress={cancelar}
              >
                <TextBtn>Cancelar</TextBtn>
              </ContainerBtncancel>
            </BoxBtns>
          </Box>
        </Container>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
