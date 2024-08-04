import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ConfigBox, Container } from "./style";
import { useTheme } from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";
import { Input } from "@/components";
import { useHookFormPreco } from "./hooks/useHookFormPrecos";
import { BoxBtns, ContainerBtnconfirma, TextBtn } from "@/globalStyles/style";
import { etanolPreco, gasolinaPreco, storage } from "@/context";
import { useSetPrecoMMKV } from "./hooks/useSetPrecoMMKV";

export const Config: React.FC = () => {
  const theme = useTheme();
  const { control, formState, handleSubmit } = useHookFormPreco();
  const [showCofig, setShowConfig] = useState<"none" | "flex">("none");
  const { setPreco } = useSetPrecoMMKV();

  return (
    <Container>
      <TouchableOpacity
        onPress={() =>
          setShowConfig((prevShow) => (prevShow === "none" ? "flex" : "none"))
        }
      >
        <FontAwesome name="gears" size={25} color={theme.COLORS.TEXT_COLOR} />
      </TouchableOpacity>

      <View style={{ marginTop: 5 }}>
        <ConfigBox $display={showCofig}>
          <TouchableOpacity
            onPress={() =>
              setShowConfig((prevShow) =>
                prevShow === "none" ? "flex" : "none"
              )
            }
            style={{
              position: "absolute",
              left: "92%",
              top: "2%",
            }}
          >
            <FontAwesome
              name="close"
              size={24}
              color={theme.COLORS.TEXT_COLOR}
            />
          </TouchableOpacity>
          <TextBtn>Definir preços</TextBtn>
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
