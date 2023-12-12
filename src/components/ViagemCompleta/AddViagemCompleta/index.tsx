import React from "react";
import { Modal, Keyboard, TouchableWithoutFeedback } from "react-native";
import Input from "../../Input";
import { useCriaViagemCompleta } from "./hooks/useCriaViagemCompleta";
import {
  ContainerBtn,
  ContainerBtncancel,
  TextBtn,
  Title,
} from "../../../globalStyles/style";
import { Box, Container2 } from "../../../globalStyles/modal";
import useHookFormViagemCompleta from "./hooks/useHookFormViagemCompleta";
import { BoxBtns } from "./style";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
};

export default function AddViaCompleta({ setShowModal, showModal }: Props) {
  const { handleSubmit, control, reset, formState } =
    useHookFormViagemCompleta();
  const { criaViagem } = useCriaViagemCompleta(setShowModal, reset);

  function AddAnotacao(data) {
    criaViagem(data);
  }

  function cancelar() {
    reset({
      saindo: "",
      indo: "",
    });
    setShowModal(false);
  }

  return (
    <Modal animationType="fade" transparent={true} visible={showModal}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container2>
          <Box>
            <Title>Adicionar uma nova Viagem</Title>

            <Input label="Saindo de:" name="saindo" control={control} />
            <Input label="Indo para:" name="indo" control={control} />

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
        </Container2>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
