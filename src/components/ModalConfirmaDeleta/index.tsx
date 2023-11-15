import React from "react";
import { Modal, Keyboard, TouchableWithoutFeedback } from "react-native";
import {
  ContainerBtn,
  ContainerBtncancel,
  TextBtn,
  Title,
} from "../../globalStyles/style";
import { useDeletaViagemCompleta } from "../ViagemCompleta/ItemViagem/hooks/useDeletaViagemCompleta";
import { useDeletaViagem } from "../ViagemAvulsa/ItemViagem/hooks/useDeletaViagemAvulsa";
import { Box, Container2, ContainerBtnModal } from "../../globalStyles/modal";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  tipoAvulsa: boolean;
  id: string;
};

export default function ModalConfirmaDeletar({
  setShowModal,
  showModal,
  tipoAvulsa,
  id,
}: Props) {
  const { delAvulsa } = useDeletaViagem();
  const { delCompleta } = useDeletaViagemCompleta();
  return (
    <Modal animationType="fade" transparent={true} visible={showModal}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container2>
          <Box>
            <Title>Tem certeza que deseja deletar?</Title>
            <ContainerBtnModal>
              <ContainerBtn
                android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                onPress={() => setShowModal(false)}
              >
                <TextBtn>Cancelar</TextBtn>
              </ContainerBtn>

              <ContainerBtncancel
                android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                onPress={() => (tipoAvulsa ? delAvulsa(id) : delCompleta(id))}
              >
                <TextBtn>Deletar</TextBtn>
              </ContainerBtncancel>
            </ContainerBtnModal>
          </Box>
        </Container2>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
