import firestore from "@react-native-firebase/firestore";
import { UseFormReset } from "react-hook-form";
import { useDadosStore } from "../../../../context/dadosStore";

type reset = { saindoDe?: string; indoPara?: string };
type itemCompleta = {
  saindo: string;
  indo: string;
};
export function useCriaViagemCompleta(
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  reset: UseFormReset<reset>
) {
  const { user } = useDadosStore();

  function addAnotacao(item: itemCompleta) {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let dataCriacao = date + "/" + month + "/" + year;

    firestore()
      .collection(user.id)
      .doc(item.saindo + "_" + item.indo + Math.random())
      .set({ ...item, dataCriacao, timestamp: new Date().getTime() })
      .then()
      .catch((err) => console.log(err));

    reset({
      saindoDe: "",
      indoPara: "",
    });
    setShowModal(false);
  }
  return { addAnotacao };
}
