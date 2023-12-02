import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "../../../../context/dadosStore";
import { UseFormReset } from "react-hook-form";

type reset = {
  pontoReferencia: string;
  kmPercorrido: number;
  veloMedia: number;
  veloVia: number;
  consumo: number;
  ar: number;
  descricaoExtra: string;
};
type itemAnotacaoCompleta = {
  PontoReferencia: string;
  KmPercorrido: string;
  VeloFeita: string;
  VeloVia: string;
  consumo: string;
  ar: string;
  descricao?: string;
};
export function useAddAnotacaoCompleta(
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  reset: UseFormReset<reset>
) {
  const { viagemCompletaStore, user } = useDadosStore();

  function addAnotacao(item: itemAnotacaoCompleta) {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let data = date + "/" + month + "/" + year;

    let hour = newDate.getHours();
    let minutes = newDate.getMinutes();
    let hora = hour + ":" + minutes;

    try {
      firestore()
        .collection(user.id)
        .doc(viagemCompletaStore.id)
        .update({
          anotacao: [
            { ...item, hora, data, timestamp: new Date().getTime() },
            ...viagemCompletaStore.anotacao,
          ],
        })
        .then()
        .catch((err) => console.log(err));
    } catch (err) {
      firestore()
        .collection(user.id)
        .doc(viagemCompletaStore.id)
        .update({
          anotacao: [{ ...item, hora, data, timestamp: new Date().getTime() }],
        })
        .then()
        .catch((err) => console.log(err));
    }

    reset({
      pontoReferencia: "",
      kmPercorrido: 0,
      veloVia: 0,
      veloMedia: 0,
      consumo: 0,
      ar: 0,
      descricaoExtra: "",
    });
    setShowModal(false);
  }

  return { addAnotacao };
}
