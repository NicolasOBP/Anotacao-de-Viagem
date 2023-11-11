import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "../../../../context/dadosStore";
import toast from "../../../../utils/toast/useToast";

export function useDeletaViagemCompleta() {
  const { user } = useDadosStore();
  function delCompleta(id: string) {
    firestore().collection(user.id).doc(id).delete();

    toast.succes({ message: "Deletado com sucesso" });
  }
  return { delCompleta };
}
