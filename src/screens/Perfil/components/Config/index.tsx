import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ConfigBox, Container } from "./style";
import { useTheme } from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";
import { Input } from "@/components";
import { useHookFormPreco } from "./hooks/useHookFormPrecos";
import { BoxBtns, ContainerBtnconfirma, TextBtn } from "@/globalStyles/style";
import { useSetPrecoMMKV } from "./hooks/useSetPrecoMMKV";
import { handleConfig } from "./hooks/useHandleConfig";

export const Config: React.FC = () => {
  const theme = useTheme();
  const { control, formState, handleSubmit } = useHookFormPreco();
  const { changeConfigVisibility, showCofig } = handleConfig();
  const { setPreco } = useSetPrecoMMKV();

  return (
    <Container>
      <TouchableOpacity onPress={() => changeConfigVisibility()}>
        <FontAwesome name="gears" size={25} color={theme.COLORS.TEXT_COLOR} />
      </TouchableOpacity>

      <View style={{ marginTop: 5 }}>
        <ConfigBox $display={showCofig}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <TextBtn>Definir preços</TextBtn>
            <FontAwesome
              onPress={() => changeConfigVisibility()}
              name="close"
              size={24}
              color={theme.COLORS.TEXT_COLOR}
            />
          </View>
          <Input
            label="Gasolina"
            control={control}
            name="Gasolina"
            keyboardType="number-pad"
          />
          <Input
            label="Etanol"
            control={control}
            name="Etanol"
            keyboardType="number-pad"
          />
          <BoxBtns>
            <ContainerBtnconfirma
              onPress={handleSubmit((data) => setPreco(data))}
              disabled={!formState.isValid}
            >
              <TextBtn>Salvar</TextBtn>
            </ContainerBtnconfirma>
          </BoxBtns>
        </ConfigBox>
      </View>
    </Container>
  );
};
