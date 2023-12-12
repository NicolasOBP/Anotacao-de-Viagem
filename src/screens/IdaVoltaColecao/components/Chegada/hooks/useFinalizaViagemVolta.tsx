import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "../../../../../context/dadosStore";
import useHoraData from "../../../../../hooks/useHoraData";

export default function useFinalizaViagemVolta() {
  const { user, dadosColecaoViagemStore, setColecoStatusStore } =
    useDadosStore();
  const { Hora } = useHoraData();

  function finalizaViagemVolta() {
    setColecoStatusStore("Finalizado");

    try {
      firestore()
        .collection(user.id)
        .doc("Coleção de Viagens")
        .collection("1")
        .doc(dadosColecaoViagemStore.idPai)
        .collection("Viagens")
        .doc(dadosColecaoViagemStore.id)
        .update({
          status: "Finalizado",
          volta: {
            anotacao: dadosColecaoViagemStore.volta.anotacao,
            data: dadosColecaoViagemStore.volta.data,
            hora: dadosColecaoViagemStore.volta.hora,
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
          status: "Finalizado",
          volta: {
            data: dadosColecaoViagemStore.volta.data,
            hora: dadosColecaoViagemStore.volta.hora,
            horaChegada: Hora(),
          },
        });
    }

    firestore()
      .collection(user.id)
      .doc("Coleção de Viagens")
      .collection("1")
      .doc(dadosColecaoViagemStore.idPai)
      .update({ acontecendo: false });
  }
  return { finalizaViagemVolta };
}
