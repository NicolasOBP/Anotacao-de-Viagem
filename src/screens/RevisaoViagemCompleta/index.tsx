import React from "react";
import { BoxInfo, Container, Title } from "../../globalStyles/style";
import { useDadosStore } from "@/context";
import { ItemRevisao } from "@/utils";
import { PropsNav } from "../../Router/types/screenProps";
import { Share } from "./components/Share";

export const RevisaoViagemCompleta: React.FC<PropsNav<"RevisãoAnotação">> = ({
  route,
}) => {
  const item = route.params.item;
  const { viagemCompletaStore } = useDadosStore();

  return (
    <Container>
      <Title>Informações da Viagem</Title>
      <BoxInfo>
        <ItemRevisao
          label="Ponto de Referência:"
          value={item.PontoReferencia}
        />
        <ItemRevisao label="Km percorrido:" value={item.KmPercorrido + " Km"} />
        <ItemRevisao
          label="Velocidade na via:"
          value={item.VeloVia + " Km/h"}
        />
        <ItemRevisao
          label="Velocidade média:"
          value={item.VeloFeita + " Km/h"}
        />
        <ItemRevisao label="Consumo:" value={item.consumo + " Km/l"} />
        <ItemRevisao label="Ar condicionado:" value={item.ar} />

        {item.descricao && (
          <ItemRevisao label="Descrção extra:" value={item.descricao} />
        )}

        <Share
          indo={viagemCompletaStore.indo}
          item={item}
          saindo={viagemCompletaStore.saindo}
        />
      </BoxInfo>
    </Container>
  );
};
