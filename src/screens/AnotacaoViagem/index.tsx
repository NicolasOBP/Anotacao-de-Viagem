import React from "react";
import { Container, Title } from "../../globalStyles/style";
import { usePegaAnotacao } from "./hooks/usePegaAnotacao";
import { PropsNav } from "../../Router/types/screenProps";
import * as Comp from "./components";

export const AnotacaoViagem: React.FC<PropsNav<"AnotaçãoViagem">> = ({
  route,
}) => {
  const viagemCompleta = route.params.item;
  const { dadosViagem } = usePegaAnotacao(viagemCompleta);

  if (!dadosViagem) return <Container></Container>;

  return (
    <Container>
      <Title>
        Anotação da viagem: {viagemCompleta.saindo} ={">"} {viagemCompleta.indo}
      </Title>

      <Comp.Partindo partindo={dadosViagem.partindo} />

      <Comp.Anotacao
        anotacao={dadosViagem.anotacao}
        chegando={dadosViagem.chegando}
        partindo={dadosViagem.partindo}
      />

      <Comp.Chegando
        chegando={dadosViagem.chegando}
        partindo={dadosViagem.partindo}
      />
    </Container>
  );
};
