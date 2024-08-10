import React from "react";
import { BoxInfo, Container, Title } from "@/globalStyles/style";
import { ItemRevisao } from "@/utils";
import { PropsNav } from "@/Router/types/screenProps";
import { Share } from "./components/Share";

export const RevisaoViagemAvulsa: React.FC<PropsNav<"RevisãoAvulsa">> = ({
  route,
}) => {
  const item = route.params.item;

  return (
    <Container>
      <Title>Informações da Viagem</Title>
      <BoxInfo>
        <ItemRevisao label="Saindo de: " value={item.saindo} />
        <ItemRevisao label="Indo para: " value={item.indo} />
        <ItemRevisao
          label="Km percorrido: "
          value={item.KmPercorrido + " Km"}
        />
        <ItemRevisao
          label="Velocidade ná via: "
          value={item.VeloVia + " Km/h"}
        />
        <ItemRevisao
          label="Velocidade média: "
          value={item.VeloFeita + " Km/h"}
        />
        <ItemRevisao label="Consumo: " value={item.consumo + " Kl/l"} />
        <ItemRevisao label="Ar condicionado: " value={item.ar} />
        {item.gastos && (
          <ItemRevisao label="Gastos: " value={"R$" + item.gastos} />
        )}

        {item.descricao && (
          <ItemRevisao label="Descrção extra: " value={item.descricao} />
        )}

        <Share item={item} />
      </BoxInfo>
    </Container>
  );
};
