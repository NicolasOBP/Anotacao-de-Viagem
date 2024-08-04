import React from "react";
import { Container, Title } from "../../globalStyles/style";
import { Input } from "@/components";
import { useDadosStore } from "@/context";
import { useHookFormPerfil } from "./hooks";
import * as Comp from "./components";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export const Perfil: React.FC = () => {
  const { control } = useHookFormPerfil();
  const { user } = useDadosStore();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Title>Tela de Perfil</Title>

        <Comp.HandleImage photo={user!.photo!} />

        <Comp.Config />

        <Input
          label="Nome"
          control={control}
          name="username"
          valor={user!.displayName!}
          editable={false}
        />
        <Input
          label="Email"
          control={control}
          name="email"
          valor={user!.email!}
          editable={false}
          style={{ marginBottom: 10 }}
        />

        <Comp.ChangeTheme />

        <Comp.HandleButton email={user!.email!} />
      </Container>
    </TouchableWithoutFeedback>
  );
};
