import React, { useState } from "react";
import { Check } from "@/types";
import { ContainerBtn, TextBtn } from "../../../../globalStyles/style";
import { Info } from "./components/Info";
import { ComecaTermina } from "@/components";

type Props = {
  partindo: Check | null;
};

export const Partindo: React.FC<Props> = ({ partindo }) => {
  const [showModal, setShowModal] = useState(false);
  const [tipoTermina, setTipoTermina] = useState(false);
  const [gastos, setGastos] = useState(false);

  return (
    <>
      {partindo ? (
        <Info partindo={partindo} />
      ) : (
        <ContainerBtn
          onPress={() => {
            setShowModal(true), setTipoTermina(false), setGastos(false);
          }}
        >
          <TextBtn>Começar viagem</TextBtn>
        </ContainerBtn>
      )}
      <ComecaTermina
        setShowModal={setShowModal}
        showModal={showModal}
        tipoTermina={tipoTermina}
        gastos={gastos}
      />
    </>
  );
};
