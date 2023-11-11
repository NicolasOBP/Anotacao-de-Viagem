import { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { ViagemCompleta } from "../../../types/viagemCompleta";
import { useDadosStore } from "../../../context/dadosStore";

export function usePegaAnotacao(viagem: ViagemCompleta) {
  const [anotacaoCompleta, setAnotacaoCompleta] = useState<ViagemCompleta>();
  const { user } = useDadosStore();

  useEffect(() => {
    ViagemCompleta();
  }, []);

  function ViagemCompleta() {
    firestore()
      .collection(user.id)
      .doc(viagem.id)
      .onSnapshot((docSnap) => {
        const viagem = docSnap.data() as ViagemCompleta;

        setAnotacaoCompleta({ ...viagem, id: docSnap.id });
      });
  }
  return { anotacaoCompleta };
}
