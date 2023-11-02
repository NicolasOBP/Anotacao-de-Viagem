import { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { ViagemCompleta } from "../../../types/viagemCompleta";

export function usePegaAnotacaoCompleta() {
  const [viagemCompleta, setViagemCompleta] = useState<ViagemCompleta[]>([]);

  useEffect(() => {
    ViagemCompleta();
  }, []);

  function ViagemCompleta() {
    firestore()
      .collection("Viagem")
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
  }
  return { viagemCompleta };
}
