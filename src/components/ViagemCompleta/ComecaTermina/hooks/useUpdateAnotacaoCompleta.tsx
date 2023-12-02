import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "../../../../context/dadosStore";
import { UseFormReset } from "react-hook-form";

type reset = {
  gasto: number;
  descricaoExtra: string;
};
export function useUpdateAnotacaoCompleta(
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  reset: UseFormReset<reset>
) {
  const { viagemCompletaStore, user } = useDadosStore();

  function addAnotacao(
    descricaoExtra: string,
    tipoTermina: boolean,
    gastos: string
  ) {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let data = date + "/" + month + "/" + year;

    let hour = newDate.getHours();
    let minutes = newDate.getMinutes();
    let hora = hour + ":" + minutes;

    if (tipoTermina) {
      firestore()
        .collection(user.id)
        .doc(viagemCompletaStore.id)
        .update({
          chegando: { data, hora, descricaoExtra, gastos },
          finalizado: true,
        })
        .then()
        .catch((err) => console.log(err));
    } else {
      firestore()
        .collection(user.id)
        .doc(viagemCompletaStore.id)
        .update({ partindo: { data, hora, descricaoExtra } })
        .then()
        .catch((err) => console.log(err));
    }
    reset({
      descricaoExtra: "",
      gasto: 0,
    });
    setShowModal(false);
  }
  return { addAnotacao };
}
