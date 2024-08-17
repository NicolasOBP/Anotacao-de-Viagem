import React from "react";
import { Modal, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Input } from "@/components";
import {
  ContainerBtn,
  ContainerBtncancel,
  TextBtn,
  BoxBtns,
} from "@/globalStyles/style";
import { Box, Container } from "@/globalStyles/modal";
import { useHookFormAnotacaoColecao, useAddAnotacaoColecao } from "./hooks";
import { itemAnotacaoColecao } from "./types";

type Props = {
  closeModal: () => void;
  showModal: boolean;
  tipo: "Ida" | "Volta";
};

export const AddAnotacaoColecao: React.FC<Props> = ({
  closeModal,
  showModal,
  tipo,
}) => {
  const { control, formState, handleSubmit, reset } =
    useHookFormAnotacaoColecao();
  const { addAnotacao } = useAddAnotacaoColecao(closeModal, reset, tipo);

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
    closeModal();
  }

  return (
    <Modal animationType="fade" transparent={true} visible={showModal}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container contentContainerStyle={{ alignItems: "center" }}>
          <Box>
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
                onPress={handleSubmit((data: itemAnotacaoColecao) =>
                  addAnotacao(data)
                )}
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
};
