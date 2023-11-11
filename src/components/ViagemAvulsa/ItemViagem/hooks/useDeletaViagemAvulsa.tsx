import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "../../../../context/dadosStore";
import toast from "../../../../utils/toast/useToast";

export function useDeletaViagem() {
  const { user } = useDadosStore();
  function delAvulsa(id: string) {
    firestore()
      .collection(user.id)
      .doc("Viagem Avulsa")
      .collection("1")
      .doc(id)
      .delete();
    toast.succes({ message: "Deletado com sucesso" });
  }

  return { delAvulsa };
}
