import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "../../../../context/dadosStore";
import toast from "../../../../utils/toast/useToast";

export default function useDeletaColecao() {
  const { user } = useDadosStore();
  function delColecao(id: string) {
    firestore()
      .collection(user.id)
      .doc("Coleção de Viagens")
      .collection("1")
      .doc(id)
      .delete();

    toast.succes({ message: "Deletado com sucesso" });
  }

  return { delColecao };
}
