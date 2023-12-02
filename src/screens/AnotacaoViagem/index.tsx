import React, { useEffect } from "react";
import { Container, Title } from "../../globalStyles/style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDadosStore } from "../../context/dadosStore";
import { usePegaAnotacao } from "./hooks/usePegaAnotacao";
import { RootStackParamListStack } from "../../Router/types/stack";
import Partindo from "./components/Partindo";
import Anotacao from "./components/Anotacao";
import Chegando from "./components/Chegando";

export type PropsNav = NativeStackScreenProps<
  RootStackParamListStack,
  "AnotaçãoViagem"
>;

export default function AnotacaoViagem({ route }: PropsNav) {
  const viagemCompleta = route.params;
  const { anotacaoCompleta } = usePegaAnotacao(viagemCompleta.item);
  const { setViagemCompleta } = useDadosStore();

  useEffect(() => {
    if (anotacaoCompleta) setViagemCompleta(anotacaoCompleta);
  }, [anotacaoCompleta]);

  return (
    <Container>
      <Title>
        Anotação da viagem: {viagemCompleta.item.saindo} ={">"}{" "}
        {viagemCompleta.item.indo}
      </Title>

      <Partindo partindo={anotacaoCompleta?.partindo} />

      <Anotacao
        anotacao={anotacaoCompleta?.anotacao}
        chegando={anotacaoCompleta?.chegando}
        partindo={anotacaoCompleta?.partindo}
      />

      <Chegando
        chegando={anotacaoCompleta?.chegando}
        partindo={anotacaoCompleta?.partindo}
      />
    </Container>
  );
}
