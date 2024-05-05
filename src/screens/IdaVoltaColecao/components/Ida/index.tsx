import React from "react";
import { FlatList, Title } from "../../../../globalStyles/style";
import { ColecaoViagem } from "@/types";
import { useDadosStore } from "@/context";
import { ItemAnotacaoColecao } from "@/components";
import useAtualizaDadosIdaVolta from "../../hooks/useAtualizaDadosIdaVolta";
import { AddAnotacao, Finalizar, ItemChegadaIda } from "../";

type Props = {
  colecao: ColecaoViagem;
};
export const Ida: React.FC<Props> = ({ colecao }) => {
  const { colecaoStatusStore } = useDadosStore();
  const { dadosAtualizados } = useAtualizaDadosIdaVolta();

  if (!dadosAtualizados) return null;

  return (
    <>
      <Title>
        {colecao.saindo} para {colecao.indo}
      </Title>

      {colecaoStatusStore === "Iniciado, ida" && <AddAnotacao tipo="Ida" />}

      <FlatList
        data={dadosAtualizados.ida.anotacao}
        renderItem={({ item }) => (
          <ItemAnotacaoColecao itemAnotacaoColecao={item} />
        )}
      />

      {colecaoStatusStore === "Iniciado, ida" && <Finalizar tipoEstado="Ida" />}

      {colecaoStatusStore !== "Iniciado, ida" && <ItemChegadaIda />}
    </>
  );
};
