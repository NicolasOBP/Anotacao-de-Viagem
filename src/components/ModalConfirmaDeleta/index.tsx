import React from "react";
import { Modal, Keyboard, TouchableWithoutFeedback } from "react-native";
import {
  ContainerBtn,
  ContainerBtncancel,
  TextBtn,
  Title,
} from "@/globalStyles/style";
import { Box, Container2, ContainerBtnModal } from "@/globalStyles/modal";
import { Status } from "@/types";
import {
  useDeletaColecao,
  useDeletaViagemColecao,
  useDeletaViagem,
  useDeletaViagemCompleta,
} from "./hooks";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  tipoDel: "Colecao" | "Viagem" | "Anotacao" | "ColecaoViagem";
  id: string;
  idPai?: string;
  statusViagem?: Status;
};

export const ModalConfirmaDeletar: React.FC<Props> = ({
  setShowModal,
  showModal,
  tipoDel,
  id,
  idPai,
  statusViagem,
}) => {
  const { delAvulsa } = useDeletaViagem();
  const { delCompleta } = useDeletaViagemCompleta();
  const { delColecao } = useDeletaColecao();
  const { delViagemColecao } = useDeletaViagemColecao();

  function del() {
    if (tipoDel === "Anotacao") delAvulsa(id);
    if (tipoDel === "Viagem") delCompleta(id);
    if (tipoDel === "Colecao") delColecao(id);
    if (tipoDel === "ColecaoViagem")
      delViagemColecao(id, idPai!, statusViagem!);
  }

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
                onPress={del}
              >
                <TextBtn>Deletar</TextBtn>
              </ContainerBtncancel>
            </ContainerBtnModal>
          </Box>
        </Container2>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
