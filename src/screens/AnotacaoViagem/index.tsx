import React from "react";
import { Container, Title } from "../../globalStyles/style";
import { usePegaAnotacao } from "./hooks/usePegaAnotacao";
import Partindo from "./components/Partindo";
import Anotacao from "./components/Anotacao";
import Chegando from "./components/Chegando";
import { PropsNav } from "../../Router/types/screenProps";

export default function AnotacaoViagem({ route }: PropsNav<"AnotaçãoViagem">) {
  const viagemCompleta = route.params.item;
  const { dadosViagem } = usePegaAnotacao(viagemCompleta);

  if (!dadosViagem) return <Container></Container>;

  return (
    <Container>
      <Title>
        Anotação da viagem: {viagemCompleta.saindo} ={">"} {viagemCompleta.indo}
      </Title>

      <Partindo partindo={dadosViagem.partindo} />

      <Anotacao
        anotacao={dadosViagem.anotacao}
        chegando={dadosViagem.chegando}
        partindo={dadosViagem.partindo}
      />

      <Chegando
        chegando={dadosViagem.chegando}
        partindo={dadosViagem.partindo}
      />
    </Container>
  );
}
