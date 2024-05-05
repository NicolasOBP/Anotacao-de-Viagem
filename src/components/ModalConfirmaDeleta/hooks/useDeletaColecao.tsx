import firestore from "@react-native-firebase/firestore";
import { useDadosStore, useToastDispatch } from "@/context";

export const useDeletaColecao = () => {
  const { user } = useDadosStore();
  const { showToast } = useToastDispatch();
  function delColecao(id: string) {
    firestore()
      .collection(user.id)
      .doc("Coleção de Viagens")
      .collection("1")
      .doc(id)
      .delete();

    showToast({ message: "Coleção deletado com sucesso", type: "Success" });
  }

  return { delColecao };
};
