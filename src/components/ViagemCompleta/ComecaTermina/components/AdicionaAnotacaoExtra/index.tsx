import React from "react";
import { ContainerBtn1, ContainerBtn2 } from "../../style";
import { Input } from "@/components";
import {
  ContainerBtncancel,
  ContainerBtnconfirma,
  TextBtn,
} from "@/globalStyles/style";
import {
  Control,
  FormState,
  UseFormHandleSubmit,
  UseFormReset,
} from "react-hook-form/dist/types";
import { useUpdateAnotacaoCompleta } from "../../hooks";

type Props = {
  control: Control<{
    gastos?: string;
    descricaoExtra?: string;
  }>;
  handleSubmit: UseFormHandleSubmit<{
    gastos?: string;
    descricaoExtra?: string;
  }>;
  reset: UseFormReset<{
    gastos?: string;
    descricaoExtra?: string;
  }>;
  formState: FormState<{
    gastos?: string;
    descricaoExtra?: string;
  }>;
  closeModal: () => void;
  tipoTermina: boolean;
};

export const AddAnotacaoExtra: React.FC<Props> = ({
  control,
  handleSubmit,
  reset,
  closeModal,
  tipoTermina,
  formState,
}) => {
  const { addAnotacao } = useUpdateAnotacaoCompleta(closeModal, reset);

  function cancelar() {
    reset({
      descricaoExtra: "",
      gastos: "",
    });
    closeModal();
  }
  return (
    <>
      <ContainerBtn1>
        <Input
          label="Descrição extra"
          control={control}
          name="descricaoExtra"
        />

        <ContainerBtn2>
          <ContainerBtnconfirma
            android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
            onPress={handleSubmit((data) =>
              addAnotacao(data.descricaoExtra!, tipoTermina, data.gastos!)
            )}
            disabled={!formState.isValid}
          >
            <TextBtn>Confirmar</TextBtn>
          </ContainerBtnconfirma>

          <ContainerBtncancel
            android_ripple={{ color: "rgb(11, 56, 152)", radius: 68 }}
            onPress={cancelar}
          >
            <TextBtn>Voltar</TextBtn>
          </ContainerBtncancel>
        </ContainerBtn2>
      </ContainerBtn1>
    </>
  );
};
