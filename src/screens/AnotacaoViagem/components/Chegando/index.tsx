import React from "react";
import { Info } from "./components/Info";
import { Check } from "@/types";
import { ContainerBtn, TextBtn } from "@/globalStyles/style";
import { ComecaTermina } from "@/components";
import { useShowModal } from "@/hooks";
import { handleState } from "../hooks/useHandleState";

type Props = {
  chegando: Check | null;
  partindo: Check | null;
};

export const Chegando: React.FC<Props> = ({ chegando, partindo }) => {
  const { closeModal, openModal, showModal } = useShowModal();
  const { activeExpenses, expenses, activeFinish, finishType } = handleState();

  return (
    <>
      {chegando ? (
        <Info chegando={chegando} />
      ) : (
        partindo && (
          <ContainerBtn
            onPress={() => {
              openModal(), activeFinish(), activeExpenses();
            }}
          >
            <TextBtn>Terminar Viagem</TextBtn>
          </ContainerBtn>
        )
      )}

      <ComecaTermina
        closeModal={closeModal}
        showModal={showModal}
        finishType={finishType}
        expenses={expenses}
      />
    </>
  );
};
