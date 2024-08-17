import React from "react";
import { Check } from "@/types";
import { ContainerBtn, TextBtn } from "@/globalStyles/style";
import { Info } from "./components/Info";
import { ComecaTermina } from "@/components";
import { useShowModal } from "@/hooks";
import { handleState } from "../hooks/useHandleState";

type Props = {
  partindo: Check | null;
};

export const Partindo: React.FC<Props> = ({ partindo }) => {
  const { closeModal, openModal, showModal } = useShowModal();
  const { deactiveExpenses, expenses, deactiveFinish, finishType } =
    handleState();

  return (
    <>
      {partindo ? (
        <Info partindo={partindo} />
      ) : (
        <ContainerBtn
          onPress={() => {
            openModal(), deactiveFinish(), deactiveExpenses();
          }}
        >
          <TextBtn>Começar viagem</TextBtn>
        </ContainerBtn>
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
