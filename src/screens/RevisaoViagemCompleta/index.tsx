import React from "react";
import { BoxInfo, Container, TextBtn, Title } from "@/globalStyles/style";
import { useDadosStore } from "@/context";
import { PropsNav } from "@/Router/types/screenProps";
import { Share } from "./components/Share";
import { ItemRevisao } from "@/components";
import { useHookFormUpdateAnotacao } from "./hooks/useHookFormUpdateAnotacao";
import { View } from "react-native";
import { useAtualizaAnotacao } from "@/hooks/useAtualizaAnotacao";

export const RevisaoViagemCompleta: React.FC<PropsNav<"RevisãoAnotação">> = ({
  route,
}) => {
  const item = route.params.item;
  const { viagemCompletaStore } = useDadosStore();
  const { control, handleSubmit, reset } = useHookFormUpdateAnotacao(item);
  const { atualizaAnotacao } = useAtualizaAnotacao();

  return (
    <Container>
      <Title>Informações da Viagem</Title>
      <BoxInfo>
        <ItemRevisao
          control={control}
          name="PontoReferencia"
          label="Ponto de Referência:"
          // value={item.PontoReferencia}
        />
        <ItemRevisao
          control={control}
          name="KmPercorrido"
          label="Km percorrido:"
          // value={item.KmPercorrido + " Km"}
        />
        <ItemRevisao
          control={control}
          name="VeloVia"
          label="Velocidade na via:"
          // value={item.VeloVia + " Km/h"}
        />
        <ItemRevisao
          control={control}
          name="VeloFeita"
          label="Velocidade média:"
          // value={item.VeloFeita + " Km/h"}
        />
        <ItemRevisao
          control={control}
          name="consumo"
          label="Consumo:"
          // value={item.consumo + " Km/l"}
        />
        <ItemRevisao
          control={control}
          name="ar"
          label="Ar condicionado:"
          // value={item.ar}
        />

        {item.descricao && (
          <ItemRevisao
            control={control}
            name="descricao"
            label="Descrção extra:"
            // value={item.descricao}
          />
        )}

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Share
            indo={viagemCompletaStore.indo}
            item={item}
            saindo={viagemCompletaStore.saindo}
          />
          <TextBtn onPress={handleSubmit((data) => atualizaAnotacao(data))}>
            Salvar
          </TextBtn>
        </View>
      </BoxInfo>
    </Container>
  );
};
