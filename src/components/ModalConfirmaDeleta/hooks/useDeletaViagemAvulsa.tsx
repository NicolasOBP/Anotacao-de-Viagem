import firestore from "@react-native-firebase/firestore";
import { useDadosStore, useToastDispatch } from "@/context";

export function useDeletaViagem() {
  const { user } = useDadosStore();
  const { showToast } = useToastDispatch();
  function delAvulsa(id: string) {
    firestore()
      .collection(user!.id!)
      .doc("Viagem Avulsa")
      .collection("1")
      .doc(id)
      .delete();

    showToast({ message: "Deletado com sucesso", type: "Success" });
  }

  return { delAvulsa };
}
