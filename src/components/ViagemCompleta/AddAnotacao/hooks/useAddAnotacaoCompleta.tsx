import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "../../../../context/dadosStore";
import { UseFormReset } from "react-hook-form";

type reset = {
  pontoReferencia: string;
  kmPercorrido: string;
  veloMedia: string;
  veloVia: string;
  consumo: string;
  ar: string;
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
      kmPercorrido: "",
      veloVia: "",
      veloMedia: "",
      consumo: "",
      ar: "",
      descricaoExtra: "",
    });
    setShowModal(false);
  }

  return { addAnotacao };
}
