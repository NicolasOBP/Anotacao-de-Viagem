import firestore from "@react-native-firebase/firestore";
import { UseFormReset } from "react-hook-form";
import { useHoraData } from "@/hooks";
import { useDadosStore } from "@/context";
import { itemCompleta } from "../types";

export const useCriaViagemCompleta = (
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  reset: UseFormReset<itemCompleta>
) => {
  const { user } = useDadosStore();

  function criaViagem(item: itemCompleta) {
    const { Data } = useHoraData();

    firestore()
      .collection(user!.id!)
      .doc(item.saindo + "_" + item.indo + Math.random())
      .set({ ...item, dataCriacao: Data(), timestamp: new Date().getTime() })
      .then()
      .catch((err) => console.log(err));

    reset({
      saindo: "",
      indo: "",
    });
    setShowModal(false);
  }
  return { criaViagem };
};
