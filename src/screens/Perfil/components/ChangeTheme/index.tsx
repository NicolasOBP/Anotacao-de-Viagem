import React from "react";
import { ContainerBtn, TextBtn } from "../../../../globalStyles/style";
import { Ionicons } from "@expo/vector-icons";
import useChangeTheme from "../../hooks/useChangeTheme";
import { useDadosStore } from "../../../../context/dadosStore";

export default function ChangeTheme() {
  const { changeTheme } = useChangeTheme();
  const { theme } = useDadosStore();

  return (
    <ContainerBtn onPress={changeTheme}>
      <Ionicons
        name={theme === "dark" ? "moon" : "sunny"}
        color={"white"}
        size={28}
      />
      <TextBtn>Trocar tema</TextBtn>
    </ContainerBtn>
  );
}
