import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "../../../../context/dadosStore";
import useHoraData from "../../../../hooks/useHoraData";
import useAtualizaDadosViagem from "../../../../screens/AnotacaoColecaoViagem/hooks/useAtualizaDadosViagem";

type itemAnotacaoColecao = {
  PontoReferencia: string;
  KmPercorrido: string;
  VeloFeita: string;
  VeloVia: string;
  consumo: string;
  ar: string;
  descricao?: string;
};
export default function useAnotacaoIda() {
  const { dadosColecaoViagemStore, user } = useDadosStore();
  const { Data, Hora } = useHoraData();
  const { atualizaDados } = useAtualizaDadosViagem(dadosColecaoViagemStore);

  async function anotacaoIda(item: itemAnotacaoColecao) {
    try {
      firestore()
        .collection(user.id)
        .doc("Coleção de Viagens")
        .collection("1")
        .doc(dadosColecaoViagemStore.idPai)
        .collection("Viagens")
        .doc(dadosColecaoViagemStore.id)
        .update({
          ida: {
            data: dadosColecaoViagemStore.ida.data,
            hora: dadosColecaoViagemStore.ida.hora,
            anotacao: [
              {
                ...item,
                hora: Hora(),
                data: Data(),
                timestamp: new Date().getTime(),
              },
              ...dadosColecaoViagemStore.ida.anotacao,
            ],
          },
        })
        .then()
        .catch((err) => console.log(err));
    } catch (err) {
      firestore()
        .collection(user.id)
        .doc("Coleção de Viagens")
        .collection("1")
        .doc(dadosColecaoViagemStore.idPai)
        .collection("Viagens")
        .doc(dadosColecaoViagemStore.id)
        .update({
          ida: {
            data: dadosColecaoViagemStore.ida.data,
            hora: dadosColecaoViagemStore.ida.hora,
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
    await atualizaDados();
  }
  return { anotacaoIda };
}
