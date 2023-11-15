import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  BoxInfo,
  Container,
  ShareContainer,
  Title,
} from "../../globalStyles/style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDadosStore } from "../../context/dadosStore";
import { shareAnotacaoViagemCompelta } from "../../utils/Share/shareAnotacaoViagemCompleta";
import { RootStackParamListStack } from "../../Router/types/stack";
import ItemRevisao from "../../utils/ItemRevisao";

export type PropsNav = NativeStackScreenProps<
  RootStackParamListStack,
  "RevisãoAnotação"
>;

export default function RevisaoViagemCompleta({ route }: PropsNav) {
  const item = route.params.item;
  const { viagemCompletaStore } = useDadosStore();

  return (
    <Container>
      <Title>Informações da Viagem</Title>
      <BoxInfo>
        <ItemRevisao
          label="Ponto de Referência:"
          value={item.PontoReferencia}
        />
        <ItemRevisao label="Km percorrido:" value={item.KmPercorrido + " Km"} />
        <ItemRevisao
          label="Velocidade na via:"
          value={item.VeloVia + " Km/h"}
        />
        <ItemRevisao
          label="Velocidade média:"
          value={item.VeloFeita + " Km/h"}
        />
        <ItemRevisao label="Consumo:" value={item.consumo + " Km/l"} />
        <ItemRevisao label="Ar condicionado:" value={item.ar} />

        {item.descricao ? (
          <ItemRevisao label="Descrção extra:" value={item.descricao} />
        ) : (
          <></>
        )}
        <ShareContainer
          style={{
            alignSelf: "flex-start",
          }}
        >
          <FontAwesome
            onPress={async () =>
              await shareAnotacaoViagemCompelta(
                item,
                viagemCompletaStore.saindo + " para " + viagemCompletaStore.indo
              )
            }
            name="share-square-o"
            size={24}
            color="black"
          />
        </ShareContainer>
      </BoxInfo>
    </Container>
  );
}
