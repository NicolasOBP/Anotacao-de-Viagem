import React from "react";
import { Modal, Keyboard, TouchableWithoutFeedback } from "react-native";
import Input from "../../Input";
import { Title } from "../../../globalStyles/style";
import { Box, Container2 } from "../../../globalStyles/modal";
import useHookFormComecaTermina from "./hooks/useHookFormComecaTermina";
import AddAnotacaoExtra from "./components/AdicionaAnotacaoExtra";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  tipoTermina: boolean;
  gastos?: boolean;
};

export default function ComecaTermina({
  setShowModal,
  showModal,
  tipoTermina,
  gastos,
}: Props) {
  const { handleSubmit, control, reset, formState } =
    useHookFormComecaTermina();

  return (
    <Modal animationType="fade" transparent={true} visible={showModal}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container2>
          <Box>
            <Title>Depois que finalizar não poderá voltar.</Title>

            {gastos && (
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
              setShowModal={setShowModal}
              tipoTermina={tipoTermina}
              formState={formState}
            />
          </Box>
        </Container2>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
