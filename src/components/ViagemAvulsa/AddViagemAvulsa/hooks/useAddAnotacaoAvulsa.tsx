import firestore from "@react-native-firebase/firestore";
import { UseFormReset } from "react-hook-form";
import { useDadosStore } from "../../../../context/dadosStore";

type reset = {
  saindoDe?: string;
  indoPara?: string;
  kmPercorrido?: number;
  veloVia?: number;
  veloMedia?: number;
  consumo?: number;
  ar?: number;
  gasto?: number;
  descricaoExtra?: string;
};
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
  reset: UseFormReset<reset>
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
      kmPercorrido: 0,
      veloVia: 0,
      veloMedia: 0,
      consumo: 0,
      ar: 0,
      gasto: 0,
      descricaoExtra: "",
    });
    setShowModal(false);
  }
  return { addAnotacao };
}
