import React from "react";
import { Container } from "../../globalStyles/style";
import { PropsNav } from "../../Router/types/screenProps";
import Ida from "./components/Ida";
import Volta from "./components/Volta";

export default function IdaVoltaColecao({
  route,
}: PropsNav<"IdaVoltaColecao">) {
  const tipo = route.params.tipo;
  const colecao = route.params.colecao;

  return (
    <Container>
      {tipo === "Ida" && <Ida colecao={colecao} />}
      {tipo === "Volta" && <Volta colecao={colecao} />}
    </Container>
  );
}
