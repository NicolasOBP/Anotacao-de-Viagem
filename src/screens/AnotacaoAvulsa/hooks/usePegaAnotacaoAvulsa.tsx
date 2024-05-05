import { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { ViagemAvulsa } from "@/types";
import { useDadosStore } from "@/context";

export const usePegaAnotacaoAvulsa = () => {
  const [viagemAvulsa, setViagemAvulsa] = useState<ViagemAvulsa[]>([]);
  const { user } = useDadosStore();

  useEffect(() => ViagemAvulsa(), [user.id]);

  function ViagemAvulsa() {
    try {
      firestore()
        .collection(user!.id)
        .doc("Viagem Avulsa")
        .collection("1")
        .orderBy("timestamp", "desc")
        .onSnapshot((docSnap) => {
          try {
            const newAnotacoes: ViagemAvulsa[] = [];
            docSnap.forEach((item) => {
              const data = { ...(item.data() as ViagemAvulsa), id: item.id };

              newAnotacoes.push(data);
            });
            setViagemAvulsa(newAnotacoes);
          } catch (err) {}
        });
    } catch (e) {
      console.log(e);
    }
  }

  return { viagemAvulsa };
};
