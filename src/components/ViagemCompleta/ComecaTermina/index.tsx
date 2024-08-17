import React from "react";
import { Modal, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Input } from "@/components";
import { Title } from "@/globalStyles/style";
import { Box, Container2 } from "@/globalStyles/modal";
import { useHookFormComecaTermina } from "./hooks/";
import { AddAnotacaoExtra } from "./components/AdicionaAnotacaoExtra";

type Props = {
  closeModal: () => void;
  showModal: boolean;
  finishType: boolean;
  expenses?: boolean;
};

export const ComecaTermina: React.FC<Props> = ({
  closeModal,
  showModal,
  expenses,
  finishType,
}) => {
  const { handleSubmit, control, reset, formState } =
    useHookFormComecaTermina();

  return (
    <Modal animationType="fade" transparent={true} visible={showModal}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container2>
          <Box>
            <Title>Depois que finalizar não poderá voltar.</Title>

            {expenses && (
              <Input
                label="Gastos (R$):"
                control={control}
                placeholder="Só número, opcional"
                name="gastos"
                keyboardType="numeric"
              />
            )}

            <Title>Deseja adicionar uma descricao extra?</Title>

            <AddAnotacaoExtra
              control={control}
              handleSubmit={handleSubmit}
              reset={reset}
              closeModal={closeModal}
              tipoTermina={finishType}
              formState={formState}
            />
          </Box>
        </Container2>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
