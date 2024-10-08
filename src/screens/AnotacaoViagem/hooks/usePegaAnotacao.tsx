import { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { ViagemCompleta } from "@/types";
import { useDadosStore } from "@/context";

export const usePegaAnotacao = (viagem: ViagemCompleta) => {
  const { user, setViagemCompleta } = useDadosStore();
  const [dadosViagem, setDadosViagem] = useState<ViagemCompleta>();

  useEffect(() => ViagemCompleta(), []);

  function ViagemCompleta() {
    firestore()
      .collection(user!.id!)
      .doc(viagem.id)
      .onSnapshot((docSnap) => {
        const viagem = docSnap.data() as ViagemCompleta;

        setDadosViagem({ ...viagem, id: docSnap.id });
        setViagemCompleta({ ...viagem, id: docSnap.id });
      });
  }
  return { dadosViagem };
};
