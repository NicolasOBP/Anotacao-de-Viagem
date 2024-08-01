import firestore from "@react-native-firebase/firestore";
import { UseFormReset } from "react-hook-form";
import { useHoraData } from "@/hooks";
import { useDadosStore } from "@/context";
import { itemAvulsa, reset } from "../types";

export const useAddViagemAvulsa = (
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  reset: UseFormReset<reset>
) => {
  const { user } = useDadosStore();
  function addAnotacao(item: itemAvulsa) {
    const { Data, Hora } = useHoraData();

    firestore()
      .collection(user!.id!)
      .doc("Viagem Avulsa")
      .collection("1")
      .add({
        ...item,
        hora: Hora(),
        data: Data(),
        timestamp: new Date().getTime(),
      })
      .then()
      .catch((err) => console.log(err));

    reset({
      saindoDe: "",
      indoPara: "",
      kmPercorrido: "",
      veloVia: "",
      veloMedia: "",
      consumo: "",
      ar: "",
      gasto: "",
      descricaoExtra: "",
    });
    setShowModal(false);
  }
  return { addAnotacao };
};
