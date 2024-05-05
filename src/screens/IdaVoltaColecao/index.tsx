import React from "react";
import { Container } from "../../globalStyles/style";
import { PropsNav } from "../../Router/types/screenProps";
import { Ida, Volta } from "./components/index";

export const IdaVoltaColecao: React.FC<PropsNav<"IdaVoltaColecao">> = ({
  route,
}) => {
  const tipo = route.params.tipo;
  const colecao = route.params.colecao;

  return (
    <Container>
      {tipo === "Ida" && <Ida colecao={colecao} />}
      {tipo === "Volta" && <Volta colecao={colecao} />}
    </Container>
  );
};
