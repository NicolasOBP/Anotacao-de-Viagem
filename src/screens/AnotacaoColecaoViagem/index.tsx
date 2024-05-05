import React, { useEffect } from "react";
import { BoxInfo, Container, Title } from "../../globalStyles/style";
import { PropsNav } from "@/Router/types/screenProps";
import { useDadosStore } from "@/context";
import { useAtualizaDadosViagem } from "@/hooks";
import { ItemTitle } from "../../globalStyles/item";
import * as Comp from "./components";

export const AnotacaoColecaoViagem: React.FC<
  PropsNav<"AnotacaoColecaoViagem">
> = ({ route }) => {
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

      {colecaoStatusStore === "Não iniciado" && (
        <Comp.IniciaViagem item={item} />
      )}

      {colecaoStatusStore !== "Não iniciado" && (
        <Comp.Ida colecao={colecao} item={item} />
      )}

      {colecaoStatusStore === "Ida finalizado, volta não" && (
        <Comp.IniciaVolta item={item} />
      )}

      {colecaoStatusStore === "Iniciado, volta" && (
        <Comp.Volta item={item} colecao={colecao} />
      )}
      {colecaoStatusStore === "Finalizado" && (
        <>
          <Comp.Volta item={item} colecao={colecao} />
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
};
