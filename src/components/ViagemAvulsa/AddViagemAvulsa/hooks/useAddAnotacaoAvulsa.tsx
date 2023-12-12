import firestore from "@react-native-firebase/firestore";
import { UseFormReset } from "react-hook-form";
import { useDadosStore } from "../../../../context/dadosStore";
import useHoraData from "../../../../hooks/useHoraData";

type reset = {
  saindoDe?: string;
  indoPara?: string;
  kmPercorrido?: string;
  veloVia?: string;
  veloMedia?: string;
  consumo?: string;
  ar?: string;
  gasto?: string;
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
    const { Data, Hora } = useHoraData();

    firestore()
      .collection(user.id)
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

    reset({
      saindoDe: "",
      indoPara: "",
      kmPercorrido: "",
      veloVia: "",
      veloMedia: "",
      consumo: "",
      ar: "",
      gasto: "",
      descricaoExtra: "",
    });
    setShowModal(false);
  }
  return { addAnotacao };
}
