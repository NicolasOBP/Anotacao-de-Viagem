import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "../../../../../context/dadosStore";
import useHoraData from "../../../../../hooks/useHoraData";

export default function useFinalizaViagemIda() {
  const { user, dadosColecaoViagemStore, setColecoStatusStore } =
    useDadosStore();
  const { Hora } = useHoraData();

  function finalizaViagemIda() {
    setColecoStatusStore("Ida finalizado, volta não");

    try {
      firestore()
        .collection(user.id)
        .doc("Coleção de Viagens")
        .collection("1")
        .doc(dadosColecaoViagemStore.idPai)
        .collection("Viagens")
        .doc(dadosColecaoViagemStore.id)
        .update({
          status: "Ida finalizado, volta não",
          ida: {
            anotacao: dadosColecaoViagemStore.ida.anotacao,
            data: dadosColecaoViagemStore.ida.data,
            hora: dadosColecaoViagemStore.ida.hora,
            horaChegada: Hora(),
          },
        });
    } catch (e) {
      firestore()
        .collection(user.id)
        .doc("Coleção de Viagens")
        .collection("1")
        .doc(dadosColecaoViagemStore.idPai)
        .collection("Viagens")
        .doc(dadosColecaoViagemStore.id)
        .update({
          status: "Ida finalizado, volta não",
          ida: {
            data: dadosColecaoViagemStore.ida.data,
            hora: dadosColecaoViagemStore.ida.hora,
            horaChegada: Hora(),
          },
        });
    }
  }
  return { finalizaViagemIda };
}
