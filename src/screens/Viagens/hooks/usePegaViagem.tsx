import { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { ViagemCompleta } from "../../../types/viagemCompleta";
import { useDadosStore } from "../../../context/dadosStore";

export function usePegaAnotacaoCompleta() {
  const [viagemCompleta, setViagemCompleta] = useState<ViagemCompleta[]>([]);
  const { user } = useDadosStore();

  useEffect(() => {
    ViagemCompleta();
  }, [user.id]);

  function ViagemCompleta() {
    try {
      firestore()
        .collection(user.id)
        .orderBy("timestamp", "desc")
        .onSnapshot((docSnap) => {
          const newAnotacoes: ViagemCompleta[] = [];
          docSnap.forEach((item) => {
            const viagem = item.data() as ViagemCompleta;

            const data = { ...viagem, id: item.id };

            newAnotacoes.push(data);
          });
          setViagemCompleta(newAnotacoes);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return { viagemCompleta };
}
