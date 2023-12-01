import React from "react";
import { Container, Title } from "../../globalStyles/style";
import Input from "../../components/Input";
import useHookForm from "../../hooks/useHookForm";
import { useDadosStore } from "../../context/dadosStore";
import HandleImage from "./components/HandleImage";
import HandleButton from "./components/HandleButton";
import ChangeTheme from "./components/ChangeTheme";

export default function Perfil() {
  const { control } = useHookForm();
  const { user } = useDadosStore();

  return (
    <Container>
      <Title>Tela de Perfil</Title>

      <HandleImage photo={user.photo} />

      <Input
        label="Nome"
        control={control}
        name="indoPara"
        valor={user.displayName}
        editable={false}
      />
      <Input
        label="Email"
        control={control}
        name="indoPara"
        valor={user.email}
        editable={false}
        style={{ marginBottom: 10 }}
      />

      <ChangeTheme />

      <HandleButton email={user.email} />
    </Container>
  );
}
