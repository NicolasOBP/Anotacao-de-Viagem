import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "@/context";
import { useHoraData } from "@/hooks";
import { UseFormReset } from "react-hook-form";
import { item } from "../types";

export const useFinalizaViagemVolta = (reset: UseFormReset<item>) => {
  const { user, dadosColecaoViagemStore, setColecoStatusStore } =
    useDadosStore();
  const { Hora } = useHoraData();

  function finalizaViagemVolta(item: item) {
    setColecoStatusStore("Finalizado");

    try {
      firestore()
        .collection(user!.id!)
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
            descricaoChegada: item.descricaoChegada,
            gastos: item.gastos,
          },
        });
    } catch (e) {
      firestore()
        .collection(user!.id!)
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
            descricaoChegada: item.descricaoChegada,
            gastos: item.gastos,
          },
        });
    }

    firestore()
      .collection(user!.id!)
      .doc("Coleção de Viagens")
      .collection("1")
      .doc(dadosColecaoViagemStore.idPai)
      .update({ acontecendo: false });

    reset();
  }
  return { finalizaViagemVolta };
};
