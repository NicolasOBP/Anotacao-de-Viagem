import firestore from "@react-native-firebase/firestore";
import { useDadosStore, useToastDispatch } from "@/context";

export const useDeletaViagemCompleta = () => {
  const { user } = useDadosStore();
  const { showToast } = useToastDispatch();
  function delCompleta(id: string) {
    firestore().collection(user!.id!).doc(id).delete();

    showToast({ message: "Deletado com sucesso", type: "Success" });
  }
  return { delCompleta };
};
