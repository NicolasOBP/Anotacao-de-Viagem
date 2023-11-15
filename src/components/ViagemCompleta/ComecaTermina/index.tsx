import React, { useState } from "react";
import { Modal, Keyboard, TouchableWithoutFeedback } from "react-native";
import Input from "../../Input";
import { useUpdateAnotacaoCompleta } from "./hooks/useUpdateAnotacaoCompleta";
import useHookForm from "../../../hooks/useHookForm";
import { propsHookForm } from "../../../types/hookForm";
import {
  ContainerBtn,
  ContainerBtncancel,
  ContainerBtnconfirma,
  TextBtn,
  Title,
} from "../../../globalStyles/style";
import { Box, Container2 } from "../../../globalStyles/modal";
import { ContainerBtn1, ContainerBtn2 } from "./style";

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
  const [showInput, setShowInput] = useState<boolean>(false);

  const { handleSubmit, control, reset } = useHookForm();
  const { addAnotacao } = useUpdateAnotacaoCompleta(setShowModal, reset);

  function adicionar(data: propsHookForm) {
    addAnotacao(data.descricaoExtra, tipoTermina, data.gastos);
    setShowInput(false);
  }

  function cancelar(input: boolean) {
    reset({
      saindoDe: "",
      indoPara: "",
      kmPercorrido: "",
      veloVia: "",
      veloMedia: "",
      consumo: "",
      ar: "",
      descricaoExtra: "",
      pontoReferencia: "",
      gastos: "",
    });
    if (input) setShowInput(false);
    else setShowModal(false);
  }

  return (
    <Modal animationType="fade" transparent={true} visible={showModal}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container2>
          <Box>
            <Title>Depois que finalizar não poderá voltar.</Title>

            {gastos ? (
              <Input
                label="Gastos (R$):"
                control={control}
                placeholder="Só número, opcional"
                name="gastos"
              />
            ) : (
              <></>
            )}

            <Title>Deseja adicionar uma descricao extra?</Title>

            {showInput ? (
              <ContainerBtn1>
                <Input
                  label="Descrição extra"
                  control={control}
                  name="descricaoExtra"
                />
                <ContainerBtn2>
                  <ContainerBtnconfirma
                    android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                    onPress={handleSubmit(adicionar)}
                  >
                    <TextBtn>Confirmar</TextBtn>
                  </ContainerBtnconfirma>
                  <ContainerBtn
                    android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                    onPress={() => cancelar(true)}
                  >
                    <TextBtn>Cancelar</TextBtn>
                  </ContainerBtn>
                  <ContainerBtncancel
                    android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                    onPress={() => cancelar(false)}
                  >
                    <TextBtn>Voltar</TextBtn>
                  </ContainerBtncancel>
                </ContainerBtn2>
              </ContainerBtn1>
            ) : (
              <ContainerBtn2>
                <ContainerBtnconfirma
                  android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                  onPress={() => setShowInput(true)}
                >
                  <TextBtn>Adicionar</TextBtn>
                </ContainerBtnconfirma>
                <ContainerBtn
                  android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                  onPress={handleSubmit(adicionar)}
                >
                  <TextBtn>Não adicionar</TextBtn>
                </ContainerBtn>
                <ContainerBtncancel
                  android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
                  onPress={() => setShowModal(false)}
                >
                  <TextBtn>Voltar</TextBtn>
                </ContainerBtncancel>
              </ContainerBtn2>
            )}
          </Box>
        </Container2>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
