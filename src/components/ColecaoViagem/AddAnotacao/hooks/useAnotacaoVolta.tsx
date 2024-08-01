import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "@/context";
import { useHoraData } from "@/hooks";
import { itemAnotacaoColecao } from "../types";

export const useAnotacaoVolta = () => {
  const { dadosColecaoViagemStore, user } = useDadosStore();
  const { Data, Hora } = useHoraData();

  function anotacaoVolta(item: itemAnotacaoColecao) {
    try {
      firestore()
        .collection(user!.id!)
        .doc("Coleção de Viagens")
        .collection("1")
        .doc(dadosColecaoViagemStore.idPai)
        .collection("Viagens")
        .doc(dadosColecaoViagemStore.id)
        .update({
          volta: {
            data: dadosColecaoViagemStore.volta.data,
            hora: dadosColecaoViagemStore.volta.hora,
            anotacao: [
              {
                ...item,
                hora: Hora(),
                data: Data(),
                timestamp: new Date().getTime(),
              },
              ...dadosColecaoViagemStore.volta.anotacao,
            ],
          },
        })
        .then()
        .catch((err) => console.log(err));
    } catch (err) {
      firestore()
        .collection(user!.id!)
        .doc("Coleção de Viagens")
        .collection("1")
        .doc(dadosColecaoViagemStore.idPai)
        .collection("Viagens")
        .doc(dadosColecaoViagemStore.id)
        .update({
          volta: {
            data: dadosColecaoViagemStore.volta.data,
            hora: dadosColecaoViagemStore.volta.hora,
            anotacao: [
              {
                ...item,
                hora: Hora(),
                data: Data(),
                timestamp: new Date().getTime(),
              },
            ],
          },
        })
        .then()
        .catch((err) => console.log(err));
    }
  }
  return { anotacaoVolta };
};
