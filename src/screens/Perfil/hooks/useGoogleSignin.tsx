import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { useDadosStore, useToastDispatch } from "@/context";
import { useAddToGoogleAnota } from "./useAddToGoogleAnota";

GoogleSignin.configure({
  webClientId:
    "825241591327-m1eo5jlk77tv1u8n63n0b5pna65biejq.apps.googleusercontent.com",
});

export const useGoogleSignin = () => {
  const { setUser } = useDadosStore();
  const { addToGoogleAnotacao } = useAddToGoogleAnota();
  const { showToast } = useToastDispatch();

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      const userInfo = await GoogleSignin.signIn();

      const { idToken } = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      const userSign = {
        email: userInfo.user.email,
        photo: userInfo.user.photo,
        displayName: userInfo.user.name,
        id: (await auth().signInWithCredential(googleCredential)).user.uid,
      };
      setUser(userSign);

      showToast({ message: "Logado com sucesso!", type: "Success" });
      return auth().signInWithCredential(googleCredential);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error);
      } else {
        // some other error happened
        console.log(error);
      }
      showToast({ message: "Erro ao fazer login.", type: "Error" });
    }
  }

  addToGoogleAnotacao();
  return { onGoogleButtonPress };
};
