import React, { useState } from "react";
import { Info } from "./components/Info";
import { Check } from "@/types";
import { ContainerBtn, TextBtn } from "../../../../globalStyles/style";
import { ComecaTermina } from "@/components";

type Props = {
  chegando: Check;
  partindo: Check;
};

export const Chegando: React.FC<Props> = ({ chegando, partindo }) => {
  const [showModal, setShowModal] = useState(false);
  const [tipoTermina, setTipoTermina] = useState(false);
  const [gastos, setGastos] = useState(false);

  return (
    <>
      {chegando ? (
        <Info chegando={chegando} />
      ) : (
        partindo && (
          <ContainerBtn
            onPress={() => {
              setShowModal(true), setTipoTermina(true), setGastos(true);
            }}
          >
            <TextBtn>Terminar Viagem</TextBtn>
          </ContainerBtn>
        )
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
