import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "../../../context/dadosStore";
import { NovaViagem } from "../../../types/colecaoViagem";
import useHoraData from "../../../hooks/useHoraData";

export default function useIniciaVolta(item: NovaViagem) {
  const { user, setColecoStatusStore } = useDadosStore();
  const { Data, Hora } = useHoraData();

  function iniciaVolta() {
    setColecoStatusStore("Iniciado, volta");

    firestore()
      .collection(user.id)
      .doc("Coleção de Viagens")
      .collection("1")
      .doc(item.idPai)
      .collection("Viagens")
      .doc(item.id)
      .update({
        status: "Iniciado, volta",
        volta: {
          hora: Hora(),
          data: Data(),
        },
      });
  }
  return { iniciaVolta };
}
