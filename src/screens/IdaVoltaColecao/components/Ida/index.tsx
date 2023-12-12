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
export default function Ida({ colecao }: Props) {
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

      {colecaoStatusStore === "Iniciado, ida" && (
        <Finalizar tipo="Botao" tipoEstado="Ida" />
      )}

      {colecaoStatusStore !== "Iniciado, ida" && <Finalizar tipo="Item" />}
    </>
  );
}
