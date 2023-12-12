import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "../../../context/dadosStore";
import { NovaViagem } from "../../../types/colecaoViagem";
import { useEffect, useState } from "react";

export default function useAtualizaDadosIdaVolta() {
  const { user, dadosColecaoViagemStore, setDadosColecaoViagem } =
    useDadosStore();

  const [dadosAtualizados, setDadosAtualizados] = useState<NovaViagem>();

  useEffect(() => {
    atualizaDadosIdaVolta();
  }, []);

  function atualizaDadosIdaVolta() {
    firestore()
      .collection(user.id)
      .doc("Coleção de Viagens")
      .collection("1")
      .doc(dadosColecaoViagemStore.idPai)
      .collection("Viagens")
      .doc(dadosColecaoViagemStore.id)
      .onSnapshot((docSnap) => {
        try {
          const data = {
            ...(docSnap.data() as NovaViagem),
            id: docSnap.id,
            idPai: dadosColecaoViagemStore.idPai,
          };

          setDadosColecaoViagem(data);
          setDadosAtualizados(data);
        } catch (err) {
          console.log(err);
        }
      });
  }
  return { dadosAtualizados };
}
