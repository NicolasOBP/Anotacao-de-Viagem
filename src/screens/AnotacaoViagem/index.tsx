import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { globalcss } from "../../globalStyles/style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ComecaTermina from "../../components/ViagemCompleta/ComecaTermina";
import { viagemCompletacss } from "./style";
import AddAnotacaoCompleta from "../../components/ViagemCompleta/AddAnotacao";
import { FlatList } from "react-native-gesture-handler";
import { useDadosStore } from "../../context/dadosStore";
import { ItemCompleta } from "../../components/ViagemCompleta/ItemAnotacao";
import { usePegaAnotacao } from "./hooks/usePegaAnotacao";
import { RootStackParamListStack } from "../../Router/types/stack";

export type PropsNav = NativeStackScreenProps<
  RootStackParamListStack,
  "AnotaçãoViagem"
>;

type itemAnotacao = {
  PontoReferencia: string;
  KmPercorrido: string;
  VeloFeita: string;
  VeloVia: string;
  consumo: string;
  ar: string;
  descricao?: string | undefined;
  hora: string;
  data: string;
};

export default function AnotacaoViagem({ route }: PropsNav) {
  const viagemCompleta = route.params;
  const { anotacaoCompleta } = usePegaAnotacao(viagemCompleta.item);

  const [showModal, setShowModal] = useState(false);
  const [showModalAnota, setShowModalAnota] = useState(false);
  const [tipoTermina, setTipoTermina] = useState(false);
  const [gastos, setGastos] = useState(false);

  const { setViagemCompleta, viagemCompletaStore } = useDadosStore();

  useEffect(() => {
    if (anotacaoCompleta) setViagemCompleta(anotacaoCompleta);
  }, [anotacaoCompleta]);

  return (
    <View style={globalcss.container}>
      <Text style={globalcss.title}>
        Anotação da viagem: {viagemCompleta.item.saindo} ={">"}{" "}
        {viagemCompleta.item.indo}
      </Text>

      <ComecaTermina
        setShowModal={setShowModal}
        showModal={showModal}
        tipoTermina={tipoTermina}
        gastos={gastos}
      />
      <AddAnotacaoCompleta
        setShowModal={setShowModalAnota}
        showModal={showModalAnota}
      />

      {anotacaoCompleta?.partindo ? (
        <View style={viagemCompletacss.boxInfo}>
          <Text style={viagemCompletacss.itemTitle}>Partida</Text>

          <Text style={viagemCompletacss.textInfo}>
            Hora e data: {anotacaoCompleta.partindo.hora} ={">"}{" "}
            {anotacaoCompleta.partindo.data}
          </Text>

          {anotacaoCompleta.partindo.descricaoExtra ? (
            <Text style={viagemCompletacss.textInfo}>
              Descrição extra: {anotacaoCompleta.partindo.descricaoExtra}
            </Text>
          ) : (
            <></>
          )}
        </View>
      ) : (
        <Pressable
          style={globalcss.conteinerBtn}
          onPress={() => {
            setShowModal(true), setTipoTermina(false), setGastos(false);
          }}
        >
          <Text style={globalcss.textBtn}>Começar viagem</Text>
        </Pressable>
      )}

      {anotacaoCompleta?.partindo && !anotacaoCompleta?.chegando ? (
        <Pressable
          style={globalcss.conteinerBtn}
          onPress={() => setShowModalAnota(true)}
        >
          <Text style={globalcss.textBtn}>Adicionar uma anotação</Text>
        </Pressable>
      ) : (
        <></>
      )}

      {anotacaoCompleta?.anotacao ? (
        <FlatList
          style={{ flex: 1 }}
          data={anotacaoCompleta.anotacao}
          renderItem={({ item }: { item: itemAnotacao }) => (
            <ItemCompleta itemAnotacaoCompleta={item} />
          )}
        />
      ) : (
        <></>
      )}

      {anotacaoCompleta?.chegando ? (
        <View style={viagemCompletacss.boxInfo}>
          <Text style={viagemCompletacss.itemTitle}>Chegada</Text>

          <Text style={viagemCompletacss.textInfo}>
            Hora e data: {anotacaoCompleta.chegando.hora} ={">"}{" "}
            {anotacaoCompleta.chegando.data}
          </Text>

          {anotacaoCompleta.chegando.gastos ? (
            <Text style={viagemCompletacss.textInfo}>
              Gastos: {anotacaoCompleta.chegando.gastos}
            </Text>
          ) : (
            <></>
          )}

          {anotacaoCompleta.chegando.descricaoExtra ? (
            <Text style={viagemCompletacss.textInfo}>
              Descrição extra: {anotacaoCompleta.chegando.descricaoExtra}
            </Text>
          ) : (
            <></>
          )}
        </View>
      ) : anotacaoCompleta?.partindo ? (
        <View
          style={{
            flexDirection: "column-reverse",
          }}
        >
          <Pressable
            style={globalcss.conteinerBtn}
            onPress={() => {
              setShowModal(true), setTipoTermina(true), setGastos(true);
            }}
          >
            <Text style={globalcss.textBtn}>Terminar Viagem</Text>
          </Pressable>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}
