import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "../../../../context/dadosStore";
import { propsHookForm } from "../../../../types/hookForm";
import { UseFormReset } from "react-hook-form";

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
  reset: UseFormReset<propsHookForm>
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

    const isValid1 = /^[0-9,.]+$/.test(item.KmPercorrido);
    const isValid2 = /^[0-9,.]+$/.test(item.VeloVia);
    const isValid3 = /^[0-9,.]+$/.test(item.VeloFeita);
    const isValid4 = /^[0-9,.]+$/.test(item.consumo);
    const isValid5 = /^[0-9,.]+$/.test(item.ar);

    if (
      item.PontoReferencia == "" ||
      item.KmPercorrido == "" ||
      item.VeloVia == "" ||
      item.VeloFeita == "" ||
      item.consumo == "" ||
      item.ar == ""
    )
      alert("Preencha todos os campos");
    else {
      if (
        isValid1 == false ||
        isValid2 == false ||
        isValid3 == false ||
        isValid4 == false ||
        isValid5 == false
      ) {
        alert("Detectado letras nos campos impróprio");
      } else {
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
            .then(() => console.log("Foi"))
            .catch((err) => console.log(err));
        } catch (err) {
          firestore()
            .collection(user.id)
            .doc(viagemCompletaStore.id)
            .update({
              anotacao: [
                { ...item, hora, data, timestamp: new Date().getTime() },
              ],
            })
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
    }
  }
  return { addAnotacao };
}
