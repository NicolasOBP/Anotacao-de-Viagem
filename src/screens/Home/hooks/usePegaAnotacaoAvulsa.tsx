import { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { ViagemAvulsa } from "../../../types/viagemAvulsa";
export function usePegaAnotacaoAvulsa() {
  const [viagemAvulsa, setViagemAvulsa] = useState<ViagemAvulsa[]>([]);

  useEffect(() => {
    ViagemAvulsa();
  }, []);

  function ViagemAvulsa() {
    firestore()
      .collection("Viagem")
      .doc("Viagem Avulsa")
      .collection("1")
      .orderBy("timestamp", "desc")
      .onSnapshot((docSnap) => {
        const newAnotacoes: ViagemAvulsa[] = [];
        docSnap.forEach((item) => {
          const data = { ...(item.data() as ViagemAvulsa), id: item.id };

          newAnotacoes.push(data);
        });
        setViagemAvulsa(newAnotacoes);
      });
  }

  return { viagemAvulsa };
}
