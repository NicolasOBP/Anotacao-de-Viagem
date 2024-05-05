import firestore from "@react-native-firebase/firestore";
import { Status } from "@/types";
import { useDadosStore, useToastDispatch } from "@/context";

export const useDeletaViagemColecao = () => {
  const { user } = useDadosStore();
  const { showToast } = useToastDispatch();

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

    showToast({ message: "Deletado com sucesso", type: "Success" });
  }

  return { delViagemColecao };
};
