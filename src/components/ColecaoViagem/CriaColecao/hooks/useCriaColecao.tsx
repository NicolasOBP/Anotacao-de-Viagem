import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "@/context";
import { UseFormReset } from "react-hook-form";
import { item } from "../types";

export const useCriaColecao = (
  closeModal: () => void,
  reset: UseFormReset<item>
) => {
  const { user } = useDadosStore();

  function criaColecao(item: item) {
    firestore()
      .collection(user!.id!)
      .doc("Coleção de Viagens")
      .collection("1")
      .doc(item.saindo + "_" + item.indo + "_" + Math.random())
      .set({ saindo: item.saindo, indo: item.indo });

    reset();
    closeModal();
  }
  return { criaColecao };
};
