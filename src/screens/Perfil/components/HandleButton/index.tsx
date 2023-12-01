import React from "react";
import { ContainerBtncancel, TextBtn } from "../../../../globalStyles/style";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import useSignOut from "../../hooks/useSignOut";
import useGoogleSignin from "../../hooks/useGoogleSignin";

type Props = {
  email: string;
};

export default function HandleButton({ email }: Props) {
  const { signOut } = useSignOut();
  const { onGoogleButtonPress } = useGoogleSignin();

  return (
    <>
      {email ? (
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
    </>
  );
}
