import firestore from "@react-native-firebase/firestore";
import { UseFormReset } from "react-hook-form";
import { useHoraData } from "@/hooks";
import { useDadosStore } from "@/context";

type reset = {
  gastos: string;
  descricaoExtra: string;
};
export const useUpdateAnotacaoCompleta = (
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  reset: UseFormReset<reset>
) => {
  const { viagemCompletaStore, user } = useDadosStore();

  function addAnotacao(
    descricaoExtra: string,
    tipoTermina: boolean,
    gastos: string
  ) {
    const { Data, Hora } = useHoraData();

    if (tipoTermina) {
      firestore()
        .collection(user.id)
        .doc(viagemCompletaStore.id)
        .update({
          chegando: { data: Data(), hora: Hora(), descricaoExtra, gastos },
          finalizado: true,
        })
        .then()
        .catch((err) => console.log(err));
    } else {
      firestore()
        .collection(user.id)
        .doc(viagemCompletaStore.id)
        .update({ partindo: { data: Data(), hora: Hora(), descricaoExtra } })
        .then()
        .catch((err) => console.log(err));
    }
    reset({
      descricaoExtra: "",
      gastos: "",
    });
    setShowModal(false);
  }
  return { addAnotacao };
};
