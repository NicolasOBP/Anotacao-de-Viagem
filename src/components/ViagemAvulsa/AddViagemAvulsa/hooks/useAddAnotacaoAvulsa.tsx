import firestore from "@react-native-firebase/firestore";
import { UseFormReset } from "react-hook-form";
import { useHoraData } from "@/hooks";
import { useDadosStore } from "@/context";
import { itemAvulsa } from "../types";

export const useAddViagemAvulsa = (
  closeModal: () => void,
  reset: UseFormReset<itemAvulsa>
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

    reset();
    closeModal();
  }
  return { addAnotacao };
};
