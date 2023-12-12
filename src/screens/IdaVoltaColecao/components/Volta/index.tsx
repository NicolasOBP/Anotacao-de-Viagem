import React from "react";
import { FlatList, Title } from "../../../../globalStyles/style";
import AddAnotacao from "../AddAnotacao";
import { ColecaoViagem } from "../../../../types/colecaoViagem";
import { useDadosStore } from "../../../../context/dadosStore";
import ItemAnotacaoColecao from "../../../../components/ColecaoViagem/ItemAnotacao";
import Finalizar from "../Chegada";
import useAtualizaDadosIdaVolta from "../../hooks/useAtualizaDadosIdaVolta";

type Props = {
  colecao: ColecaoViagem;
};
export default function Volta({ colecao }: Props) {
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
        <Finalizar tipo="Botao" tipoEstado="Volta" />
      )}

      {colecaoStatusStore === "Finalizado" && <Finalizar tipo="Item" />}
    </>
  );
}
