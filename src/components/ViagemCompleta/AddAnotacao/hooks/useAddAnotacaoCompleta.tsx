import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "../../../../context/dadosStore";
import { UseFormReset } from "react-hook-form";
import useHoraData from "../../../../hooks/useHoraData";

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
    const { Data, Hora } = useHoraData();

    try {
      firestore()
        .collection(user.id)
        .doc(viagemCompletaStore.id)
        .update({
          anotacao: [
            {
              ...item,
              hora: Hora(),
              data: Data(),
              timestamp: new Date().getTime(),
            },
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
          anotacao: [
            {
              ...item,
              hora: Hora(),
              data: Data(),
              timestamp: new Date().getTime(),
            },
          ],
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
