import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { globalcss } from "../../globalStyles/style";
import { Ionicons } from "@expo/vector-icons";
import Input from "../../components/Input";
import useHookForm from "../../hooks/useHookForm";
import { useDadosStore } from "../../context/dadosStore";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import useGoogleSignin from "./hooks/useGoogleSignin";
import useAddToGoogleAnota from "./hooks/useAddToGoogleAnota";
import useSignOut from "./hooks/useSignOut";

export default function Perfil() {
  const { control } = useHookForm();
  const { user } = useDadosStore();
  const { onGoogleButtonPress } = useGoogleSignin();
  const { signOut } = useSignOut();

  return (
    <View style={globalcss.container}>
      <Text style={globalcss.title}>Tela de Perfil</Text>
      {user.photo ? (
        <Image
          style={{ width: 150, height: 150, borderRadius: 80 }}
          source={{ uri: user.photo }}
        />
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
      {user.email ? (
        <Pressable style={globalcss.conteinerBtncancel} onPress={signOut}>
          <Text style={globalcss.textBtn}>Deslogar</Text>
        </Pressable>
      ) : (
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={onGoogleButtonPress}
        />
      )}
    </View>
  );
}
