import React from "react";
import { FlatList, Title } from "../../../../globalStyles/style";
import { ColecaoViagem } from "@/types";
import { useDadosStore } from "@/context";
import { ItemAnotacaoColecao } from "@/components";
import useAtualizaDadosIdaVolta from "../../hooks/useAtualizaDadosIdaVolta";
import { AddAnotacao, Finalizar, ItemChegadaVolta } from "../";

type Props = {
  colecao: ColecaoViagem;
};
export const Volta: React.FC<Props> = ({ colecao }) => {
  const { colecaoStatusStore } = useDadosStore();
  const { dadosAtualizados } = useAtualizaDadosIdaVolta();

  if (!dadosAtualizados) return null;

  return (
    <>
      <Title>
        {colecao.indo} para {colecao.saindo}
      </Title>

      {colecaoStatusStore === "Iniciado, volta" && <AddAnotacao tipo="Volta" />}

      <FlatList
        data={dadosAtualizados.volta.anotacao}
        renderItem={({ item }) => (
          <ItemAnotacaoColecao itemAnotacaoColecao={item} />
        )}
      />

      {colecaoStatusStore === "Iniciado, volta" && (
        <Finalizar tipoEstado="Volta" />
      )}

      {colecaoStatusStore === "Finalizado" && <ItemChegadaVolta />}
    </>
  );
};
