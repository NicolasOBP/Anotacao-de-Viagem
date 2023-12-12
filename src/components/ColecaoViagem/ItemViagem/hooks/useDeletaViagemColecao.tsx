import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "../../../../context/dadosStore";
import toast from "../../../../utils/toast/useToast";
import { Status } from "../../../../types/colecaoViagem";

export default function useDeletaViagemColecao() {
  const { user } = useDadosStore();

  function delViagemColecao(id: string, idPai: string, status: Status) {
    if (status !== "Finalizado")
      firestore()
        .collection(user.id)
        .doc("Coleção de Viagens")
        .collection("1")
        .doc(idPai)
        .update({ acontecendo: false });

    firestore()
      .collection(user.id)
      .doc("Coleção de Viagens")
      .collection("1")
      .doc(idPai)
      .collection("Viagens")
      .doc(id)
      .delete();

    toast.succes({ message: "Deletado com sucesso" });
  }

  return { delViagemColecao };
}
