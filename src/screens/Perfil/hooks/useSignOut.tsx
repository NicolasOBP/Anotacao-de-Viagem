import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useDadosStore } from "../../../context/dadosStore";
import toast from "../../../utils/toast/useToast";
import auth from "@react-native-firebase/auth";
import useAnonymosSignIn from "../../../hooks/useAnonymosSignIn";

export default function useSignOut() {
  const { setUser } = useDadosStore();
  const { anonymousSignin } = useAnonymosSignIn();

  async function signOut() {
    try {
      auth().signOut();
      await GoogleSignin.signOut();

      setUser({ displayName: "", email: "", id: "", photo: "" });

      anonymousSignin();
      toast.succes({ message: "Deslogado com sucesso!" });
    } catch (e) {
      console.log(e);
    }
  }
  return { signOut };
}
