import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  BoxInfo,
  Container,
  ShareContainer,
  Title,
} from "../../globalStyles/style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { share } from "../../utils/Share/shareViagemAvulsa";
import { RootStackParamListStack } from "../../Router/types/stack";
import ItemRevisao from "../../utils/ItemRevisao";

export type PropsNav = NativeStackScreenProps<
  RootStackParamListStack,
  "RevisãoAvulsa"
>;

export default function RevisaoViagemAvulsa({ route }: PropsNav) {
  const item = route.params.item;

  return (
    <Container>
      <Title>Informações da Viagem</Title>
      <BoxInfo>
        <ItemRevisao label="Saindo de: " value={item.saindo} />
        <ItemRevisao label="Indo para: " value={item.indo} />
        <ItemRevisao
          label="Km percorrido: "
          value={item.KmPercorrido + " Km"}
        />
        <ItemRevisao
          label="Velocidade ná via: "
          value={item.VeloVia + " Km/h"}
        />
        <ItemRevisao
          label="Velocidade média: "
          value={item.VeloFeita + " Km/h"}
        />
        <ItemRevisao label="Consumo: " value={item.consumo + " Kl/l"} />
        <ItemRevisao label="Ar condicionado: " value={item.ar} />
        {item.gastos ? (
          <ItemRevisao label="Gastos: " value={"R$" + item.gastos} />
        ) : (
          <></>
        )}
        {item.descricao ? (
          <ItemRevisao label="Descrção extra: " value={item.descricao} />
        ) : (
          <></>
        )}
        <ShareContainer>
          <FontAwesome
            onPress={async () => await share(item)}
            name="share-square-o"
            size={24}
            color="black"
          />
        </ShareContainer>
      </BoxInfo>
    </Container>
  );
}
