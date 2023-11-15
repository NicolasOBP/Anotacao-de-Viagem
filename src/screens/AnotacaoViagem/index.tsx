import { View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  BoxInfo,
  Container,
  ContainerBtn,
  TextBtn,
  Title,
  FlatList,
} from "../../globalStyles/style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ComecaTermina from "../../components/ViagemCompleta/ComecaTermina";
import AddAnotacaoCompleta from "../../components/ViagemCompleta/AddAnotacao";
import { useDadosStore } from "../../context/dadosStore";
import { ItemCompleta } from "../../components/ViagemCompleta/ItemAnotacao";
import { usePegaAnotacao } from "./hooks/usePegaAnotacao";
import { RootStackParamListStack } from "../../Router/types/stack";
import { ItemBox, ItemText, ItemTitle } from "../../globalStyles/item";

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
        <BoxInfo>
          <ItemTitle>Partida</ItemTitle>

          <ItemText>
            Hora e data: {anotacaoCompleta.partindo.hora} ={">"}{" "}
            {anotacaoCompleta.partindo.data}
          </ItemText>

          {anotacaoCompleta.partindo.descricaoExtra ? (
            <ItemText>
              Descrição extra: {anotacaoCompleta.partindo.descricaoExtra}
            </ItemText>
          ) : (
            <></>
          )}
        </BoxInfo>
      ) : (
        <ContainerBtn
          onPress={() => {
            setShowModal(true), setTipoTermina(false), setGastos(false);
          }}
        >
          <TextBtn>Começar viagem</TextBtn>
        </ContainerBtn>
      )}

      {anotacaoCompleta?.partindo && !anotacaoCompleta?.chegando ? (
        <ContainerBtn onPress={() => setShowModalAnota(true)}>
          <TextBtn>Adicionar uma anotação</TextBtn>
        </ContainerBtn>
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
        <ItemBox>
          <ItemTitle>Chegada</ItemTitle>

          <ItemText>
            Hora e data: {anotacaoCompleta.chegando.hora} ={">"}{" "}
            {anotacaoCompleta.chegando.data}
          </ItemText>

          {anotacaoCompleta.chegando.gastos ? (
            <ItemText>Gastos: {anotacaoCompleta.chegando.gastos}</ItemText>
          ) : (
            <></>
          )}

          {anotacaoCompleta.chegando.descricaoExtra ? (
            <ItemText>
              Descrição extra: {anotacaoCompleta.chegando.descricaoExtra}
            </ItemText>
          ) : (
            <></>
          )}
        </ItemBox>
      ) : anotacaoCompleta?.partindo ? (
        <View
          style={{
            flexDirection: "column-reverse",
          }}
        >
          <ContainerBtn
            onPress={() => {
              setShowModal(true), setTipoTermina(true), setGastos(true);
            }}
          >
            <TextBtn>Terminar Viagem</TextBtn>
          </ContainerBtn>
        </View>
      ) : (
        <></>
      )}
    </Container>
  );
}
