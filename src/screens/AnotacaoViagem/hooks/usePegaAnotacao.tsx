import { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { ViagemCompleta } from "../../../types/viagemCompleta";

export function usePegaAnotacao(viagem: ViagemCompleta) {
  const [anotacaoCompleta, setAnotacaoCompleta] = useState<ViagemCompleta>();

  useEffect(() => {
    ViagemCompleta();
  }, []);

  function ViagemCompleta() {
    firestore()
      .collection("Viagem")
      .doc(viagem.id)
      .onSnapshot((docSnap) => {
        const viagem = docSnap.data() as ViagemCompleta;

        setAnotacaoCompleta({ ...viagem, id: docSnap.id });
      });
  }
  return { anotacaoCompleta };
}
