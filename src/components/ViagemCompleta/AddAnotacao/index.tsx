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
import { Box, Container } from "@/globalStyles/modal";
import { useAddAnotacaoCompleta, useHookFormAnotacaoCompleta } from "./hooks";
import { useDadosStore } from "@/context";
import { itemAnotacaoCompleta } from "./types";

type Props = {
  closeModal: () => void;
  showModal: boolean;
};
export const AddAnotacaoCompleta: React.FC<Props> = ({
  showModal,
  closeModal,
}) => {
  const { viagemCompletaStore } = useDadosStore();

  const { handleSubmit, control, reset, formState } =
    useHookFormAnotacaoCompleta();
  const { addAnotacao } = useAddAnotacaoCompleta(closeModal, reset);

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
                onPress={handleSubmit((data: itemAnotacaoCompleta) =>
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
