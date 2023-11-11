import firestore from "@react-native-firebase/firestore";
import { UseFormReset } from "react-hook-form";
import { propsHookForm } from "../../../../types/hookForm";
import { useDadosStore } from "../../../../context/dadosStore";

type itemCompleta = {
  saindo: string;
  indo: string;
};
export function useCriaViagemCompleta(
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  reset: UseFormReset<propsHookForm>
) {
  const { user } = useDadosStore();

  function addAnotacao(item: itemCompleta) {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let dataCriacao = date + "/" + month + "/" + year;

    const isFieldsEmpty = item.saindo == "" || item.indo == "";
    if (isFieldsEmpty) alert("Preencha todos os campos");
    else {
      firestore()
        .collection(user.id)
        .doc(item.saindo + "_" + item.indo + Math.random())
        .set({ ...item, dataCriacao, timestamp: new Date().getTime() })
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
      });
      setShowModal(false);
    }
  }
  return { addAnotacao };
}
