import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "../../../../context/dadosStore";
import { propsHookForm } from "../../../../types/hookForm";
import { UseFormReset } from "react-hook-form";

export function useUpdateAnotacaoCompleta(
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  reset: UseFormReset<propsHookForm>
) {
  const { viagemCompletaStore, user } = useDadosStore();

  function addAnotacao(descricaoExtra: string, tipoTermina: boolean) {
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
        .update({ chegando: { data, hora, descricaoExtra }, finalizado: true })
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
      saindoDe: "",
      indoPara: "",
      kmPercorrido: "",
      veloVia: "",
      veloMedia: "",
      consumo: "",
      ar: "",
      descricaoExtra: "",
      pontoReferencia: "",
    });
    setShowModal(false);
  }
  return { addAnotacao };
}
