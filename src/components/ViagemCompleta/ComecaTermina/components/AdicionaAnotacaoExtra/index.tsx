import React, { useState } from "react";
import { ContainerBtn1, ContainerBtn2 } from "../../style";
import Input from "../../../../Input";
import {
  ContainerBtn,
  ContainerBtncancel,
  ContainerBtnconfirma,
  TextBtn,
} from "../../../../../globalStyles/style";
import {
  Control,
  FormState,
  UseFormHandleSubmit,
  UseFormReset,
} from "react-hook-form/dist/types";
import { useUpdateAnotacaoCompleta } from "../../hooks/useUpdateAnotacaoCompleta";

type Props = {
  control: Control<{
    gasto?: number;
    descricaoExtra?: string;
  }>;
  handleSubmit: UseFormHandleSubmit<{
    gasto?: number;
    descricaoExtra?: string;
  }>;
  reset: UseFormReset<{
    gasto?: number;
    descricaoExtra?: string;
  }>;
  formState: FormState<{
    gasto?: number;
    descricaoExtra?: string;
  }>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  tipoTermina: boolean;
};

export default function AddAnotacaoExtra({
  control,
  handleSubmit,
  reset,
  setShowModal,
  tipoTermina,
  formState,
}: Props) {
  const [showInput, setShowInput] = useState(false);

  const { addAnotacao } = useUpdateAnotacaoCompleta(setShowModal, reset);

  function adicionar(data) {
    addAnotacao(
      data.descricaoExtra,
      tipoTermina,
      data.gastos ? data.gastos : ""
    );
    setShowInput(false);
  }
  function cancelar(input: boolean) {
    reset({
      descricaoExtra: "",
      gasto: 0,
    });
    if (input) setShowInput(false);
    else setShowModal(false);
  }

  return (
    <>
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
              disabled={!formState.isValid}
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
            disabled={!formState.isValid}
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
    </>
  );
}
