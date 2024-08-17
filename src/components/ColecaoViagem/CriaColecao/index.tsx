import React from "react";
import { Modal, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Input } from "@/components";
import {
  ContainerBtn,
  ContainerBtncancel,
  TextBtn,
  Title,
  BoxBtns,
} from "@/globalStyles/style";
import { Box, Container2 } from "@/globalStyles/modal";
import { useHookFormCriaColecao, useCriaColecao } from "./hooks";
import { item } from "./types";

type Props = {
  closeModal: () => void;
  showModal: boolean;
};

export const CriaColecaoViagem: React.FC<Props> = ({
  showModal,
  closeModal,
}) => {
  const { handleSubmit, control, reset, formState } = useHookFormCriaColecao();
  const { criaColecao } = useCriaColecao(closeModal, reset);

  function cancelar() {
    reset({
      saindo: "",
      indo: "",
    });
    closeModal();
  }

  return (
    <Modal animationType="fade" transparent={true} visible={showModal}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container2>
          <Box>
            <Title>
              Criar uma coleção, se possível não criar coleções com mesmo nome
            </Title>

            <Input label="Saindo de:" name="saindo" control={control} />
            <Input label="Indo para:" name="indo" control={control} />

            <BoxBtns>
              <ContainerBtn
                android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                onPress={handleSubmit((data: item) => criaColecao(data))}
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
};
