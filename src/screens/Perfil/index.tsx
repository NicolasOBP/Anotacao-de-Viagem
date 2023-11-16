import React from "react";
import {
  Container,
  ContainerBtn,
  ContainerBtncancel,
  TextBtn,
  Title,
} from "../../globalStyles/style";
import { Ionicons } from "@expo/vector-icons";
import Input from "../../components/Input";
import useHookForm from "../../hooks/useHookForm";
import { useDadosStore } from "../../context/dadosStore";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import useGoogleSignin from "./hooks/useGoogleSignin";
import useSignOut from "./hooks/useSignOut";
import { Image } from "./style";
import useChangeTheme from "./hooks/useChangeTheme";

export default function Perfil() {
  const { control } = useHookForm();
  const { user, theme } = useDadosStore();
  const { onGoogleButtonPress } = useGoogleSignin();
  const { signOut } = useSignOut();
  const { changeTheme } = useChangeTheme();

  return (
    <Container>
      <Title>Tela de Perfil</Title>
      {user.photo ? (
        <Image source={{ uri: user.photo }} />
      ) : (
        <Ionicons name="person-circle-outline" size={200} />
      )}
      <Input
        label="Nome"
        control={control}
        name="indoPara"
        valor={user.displayName}
        disable={false}
      />
      <Input
        label="Email"
        control={control}
        name="indoPara"
        valor={user.email}
        disable={false}
      />

      <ContainerBtn onPress={changeTheme}>
        {theme === "light" ? (
          <Ionicons name="sunny" color={"white"} size={28} />
        ) : (
          <Ionicons name="moon" color={"white"} size={28} />
        )}

        <TextBtn>Trocar tema</TextBtn>
      </ContainerBtn>

      {user.email ? (
        <ContainerBtncancel onPress={signOut}>
          <TextBtn>Deslogar</TextBtn>
        </ContainerBtncancel>
      ) : (
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={onGoogleButtonPress}
        />
      )}
    </Container>
  );
}
