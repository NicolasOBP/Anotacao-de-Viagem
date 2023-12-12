import React from "react";
import { Modal, Keyboard, TouchableWithoutFeedback } from "react-native";
import Input from "../../Input";
import {
  ContainerBtn,
  ContainerBtncancel,
  TextBtn,
  Title,
} from "../../../globalStyles/style";
import { useAddViagemAvulsa } from "./hooks/useAddAnotacaoAvulsa";
import { Box, Container } from "../../../globalStyles/modal";
import useHookFormAddViagemAvulsa from "./hooks/useHookFormAddViagemAvulsa";
import { BoxBtns } from "./style";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
};

export default function AddViaAvulsa({ setShowModal, showModal }: Props) {
  const { handleSubmit, control, reset, formState } =
    useHookFormAddViagemAvulsa();

  const { addAnotacao } = useAddViagemAvulsa(setShowModal, reset);

  function AddAnotacao(data) {
    addAnotacao(data);
  }

  function cancelar() {
    reset({
      saindo: "",
      indo: "",
      KmPercorrido: "",
      VeloVia: "",
      VeloFeita: "",
      consumo: "",
      ar: "",
      descricao: "",
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

            <Input label="Saindo de:" control={control} name="saindo" />
            <Input label="Indo para:" control={control} name="indo" />
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
