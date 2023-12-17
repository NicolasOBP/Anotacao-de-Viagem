import React, { useEffect } from "react";
import { BoxInfo, Container, Title } from "../../globalStyles/style";
import { PropsNav } from "../../Router/types/screenProps";
import IniciaViagem from "./components/IniciaViagem";
import Ida from "./components/Ida";
import IniciaVolta from "./components/IniciaVolta";
import Volta from "./components/Volta";
import { useDadosStore } from "../../context/dadosStore";
import useAtualizaDadosViagem from "./hooks/useAtualizaDadosViagem";
import { ItemTitle } from "../../globalStyles/item";

export default function AnotacaoColecaoViagem({
  route,
}: PropsNav<"AnotacaoColecaoViagem">) {
  const item = route.params.item;
  const colecao = route.params.colecao;
  const { colecaoStatusStore, dadosColecaoViagemStore } = useDadosStore();
  const { atualizaDados } = useAtualizaDadosViagem(item);

  useEffect(() => {
    atualizaDados();
  }, []);

  return (
    <Container>
      <Title>
        {colecao.saindo} para {colecao.indo}
      </Title>

      {colecaoStatusStore === "Não iniciado" && <IniciaViagem item={item} />}

      {colecaoStatusStore !== "Não iniciado" && (
        <Ida colecao={colecao} item={item} />
      )}

      {colecaoStatusStore === "Ida finalizado, volta não" && (
        <IniciaVolta item={item} />
      )}

      {colecaoStatusStore === "Iniciado, volta" && (
        <Volta item={item} colecao={colecao} />
      )}
      {colecaoStatusStore === "Finalizado" && (
        <>
          <Volta item={item} colecao={colecao} />
          <BoxInfo>
            <ItemTitle>
              Gastos Totais: R$
              {Number(dadosColecaoViagemStore.ida.gastos) +
                Number(dadosColecaoViagemStore.volta.gastos)}
            </ItemTitle>
          </BoxInfo>
        </>
      )}
    </Container>
  );
}
