import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "@/context";
import { useHoraData } from "@/hooks";
import { UseFormReset } from "react-hook-form";
import { item } from "../types";

export const useFinalizaViagemIda = (reset: UseFormReset<item>) => {
  const { user, dadosColecaoViagemStore, setColecoStatusStore } =
    useDadosStore();
  const { Hora } = useHoraData();

  function finalizaViagemIda(item: item) {
    setColecoStatusStore("Ida finalizado, volta não");

    try {
      firestore()
        .collection(user!.id!)
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
          status: "Ida finalizado, volta não",
          ida: {
            data: dadosColecaoViagemStore.ida.data,
            hora: dadosColecaoViagemStore.ida.hora,
            horaChegada: Hora(),
            descricaoChegada: item.descricaoChegada,
            gastos: item.gastos,
          },
        });
    }
    reset();
  }
  return { finalizaViagemIda };
};
