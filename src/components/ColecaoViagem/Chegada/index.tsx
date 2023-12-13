import { Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import React from "react";
import { Box, Container2 } from "../../../globalStyles/modal";
import {
  ContainerBtncancel,
  ContainerBtnconfirma,
  TextBtn,
  Title,
} from "../../../globalStyles/style";
import Input from "../../Input";
import useHookFormChegada from "./hooks/useHookFormChegada";
import {
  ContainerBtn1,
  ContainerBtn2,
} from "../../ViagemCompleta/ComecaTermina/style";
import useFinalizaViagem from "./hooks/useFinalizaViagem";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  tipoEstado: "Ida" | "Volta";
};

export default function Chegada({
  setShowModal,
  showModal,
  tipoEstado,
}: Props) {
  const { control, formState, handleSubmit, reset } = useHookFormChegada();
  const { finalizaViagem } = useFinalizaViagem(tipoEstado, reset);

  function adicionar(data) {
    finalizaViagem(data);
  }
  function cancelar() {
    reset({
      descricaoChegada: "",
      gastos: "",
    });
    setShowModal(false);
  }

  return (
    <Modal animationType="fade" transparent={true} visible={showModal}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container2>
          <Box>
            <Title>Depois que finalizar não poderá voltar.</Title>

            <Input
              label="Gastos (R$):"
              control={control}
              placeholder="Só número, opcional"
              name="gastos"
              keyboardType="numeric"
            />

            <Title>Deseja adicionar uma descricao extra?</Title>

            <ContainerBtn1>
              <Input
                label="Descrição extra"
                control={control}
                name="descricaoChegada"
              />

              <ContainerBtn2>
                <ContainerBtnconfirma
                  android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                  onPress={handleSubmit(adicionar)}
                  disabled={!formState.isValid}
                >
                  <TextBtn>Confirmar</TextBtn>
                </ContainerBtnconfirma>

                <ContainerBtncancel
                  android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                  onPress={cancelar}
                >
                  <TextBtn>Voltar</TextBtn>
                </ContainerBtncancel>
              </ContainerBtn2>
            </ContainerBtn1>
          </Box>
        </Container2>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
