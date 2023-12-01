import React, { useState } from "react";
import Info from "./components/Info";
import { Check } from "../../../../types/viagemCompleta";
import { ContainerBtn, TextBtn } from "../../../../globalStyles/style";
import ComecaTermina from "../../../../components/ViagemCompleta/ComecaTermina";

type Props = {
  chegando: Check;
  partindo: Check;
};

export default function Chegando({ chegando, partindo }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [tipoTermina, setTipoTermina] = useState(false);
  const [gastos, setGastos] = useState(false);

  return (
    <>
      {chegando ? (
        <Info chegando={partindo} />
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
}
