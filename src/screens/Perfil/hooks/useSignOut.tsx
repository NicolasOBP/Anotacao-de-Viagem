import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { useAnonymosSignIn } from "@/hooks";
import { useToastDispatch, useDadosStore } from "@/context";

export const useSignOut = () => {
  const { setUser } = useDadosStore();
  const { anonymousSignin } = useAnonymosSignIn();
  const { showToast } = useToastDispatch();

  async function signOut() {
    try {
      auth().signOut();
      await GoogleSignin.signOut();

      setUser({ displayName: "", email: "", id: "", photo: "" });

      anonymousSignin();
      showToast({ message: "Deslogado com sucesso!", type: "Success" });
    } catch (e) {
      showToast({ message: "Erro ao deslogar", type: "Error" });
      console.log(e);
    }
  }
  return { signOut };
};
