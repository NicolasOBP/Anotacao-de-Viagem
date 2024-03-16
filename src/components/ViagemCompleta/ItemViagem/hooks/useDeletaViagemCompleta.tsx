import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "../../../../context/dadosStore";
import { useToastDispatch } from "../../../../context/Toast/useToastDispatch";

export function useDeletaViagemCompleta() {
  const { user } = useDadosStore();
  const { showToast } = useToastDispatch();
  function delCompleta(id: string) {
    firestore().collection(user.id).doc(id).delete();

    showToast({ message: "Deletado com sucesso", type: "Success" });
  }
  return { delCompleta };
}
