import React from "react";
import { ContainerBtncancel, TextBtn } from "@/globalStyles/style";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { useGoogleSignin, useSignOut } from "../../hooks";

type Props = {
  email: string;
};

export const HandleButton: React.FC<Props> = ({ email }) => {
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
};
