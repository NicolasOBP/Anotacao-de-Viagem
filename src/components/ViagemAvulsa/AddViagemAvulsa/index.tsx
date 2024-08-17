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
import { useAddViagemAvulsa, useHookFormAddViagemAvulsa } from "./hooks";
import { itemAvulsa } from "./types";

type Props = {
  closeModal: () => void;
  showModal: boolean;
};

export const AddViaAvulsa: React.FC<Props> = ({ closeModal, showModal }) => {
  const { handleSubmit, control, reset, formState } =
    useHookFormAddViagemAvulsa();

  const { addAnotacao } = useAddViagemAvulsa(closeModal, reset);

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
    closeModal();
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
                onPress={handleSubmit((data: itemAvulsa) => addAnotacao(data))}
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
