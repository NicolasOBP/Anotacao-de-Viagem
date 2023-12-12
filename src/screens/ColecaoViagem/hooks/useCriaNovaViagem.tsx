import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "../../../context/dadosStore";
import { ColecaoViagem } from "../../../types/colecaoViagem";
import useHoraData from "../../../hooks/useHoraData";

export default function useCriaNovaViagem() {
  const { user, setColecoStatusStore } = useDadosStore();
  const { Timestamp, Data } = useHoraData();

  function criaNovaaViagem(colecao: ColecaoViagem) {
    setColecoStatusStore("Não iniciado");

    firestore()
      .collection(user.id)
      .doc("Coleção de Viagens")
      .collection("1")
      .doc(colecao.id)
      .update({ acontecendo: true });

    firestore()
      .collection(user.id)
      .doc("Coleção de Viagens")
      .collection("1")
      .doc(colecao.id)
      .collection("Viagens")
      .add({
        dataCriacao: Data(),
        timestamp: Timestamp(),
        status: "Não iniciado",
      });
  }
  return { criaNovaaViagem };
}
