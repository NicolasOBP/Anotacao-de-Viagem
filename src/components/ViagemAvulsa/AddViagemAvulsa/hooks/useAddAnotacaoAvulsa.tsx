import firestore from "@react-native-firebase/firestore";
import { UseFormReset } from "react-hook-form";
import { propsHookForm } from "../../../../types/hookForm";
import { useDadosStore } from "../../../../context/dadosStore";

type itemAvulsa = {
  saindo: string;
  indo: string;
  KmPercorrido: string;
  VeloFeita: string;
  VeloVia: string;
  consumo: string;
  ar: string;
  gastos?: string;
  descricao?: string;
};
export function useAddViagemAvulsa(
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  reset: UseFormReset<propsHookForm>
) {
  const { user } = useDadosStore();
  function addAnotacao(item: itemAvulsa) {
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
    const isValid6 = /^[0-9,.]+$/.test(item.gastos);

    const isEmpyt =
      item.saindo == "" ||
      item.indo == "" ||
      item.KmPercorrido == "" ||
      item.VeloVia == "" ||
      item.VeloFeita == "" ||
      item.consumo == "" ||
      item.ar == "";
    const hasNumber =
      isValid1 == false ||
      isValid2 == false ||
      isValid3 == false ||
      isValid4 == false ||
      isValid5 == false ||
      isValid6 == false;
    if (isEmpyt) alert("Preencha todos os campos");
    else if (hasNumber) {
      alert("Detectado letras nos campos impróprio");
    } else {
      firestore()
        .collection(user.id)
        .doc("Viagem Avulsa")
        .collection("1")
        .add({ ...item, hora, data, timestamp: new Date().getTime() })
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
        descricaoExtra: "",
        pontoReferencia: "",
        gastos: "",
      });
      setShowModal(false);
    }
  }
  return { addAnotacao };
}
