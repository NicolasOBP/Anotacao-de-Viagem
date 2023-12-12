import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "../../../context/dadosStore";
import { ColecaoViagem } from "../../../types/colecaoViagem";
import { useEffect, useState } from "react";

export default function useAtualizaColecao(item: ColecaoViagem) {
  const { user } = useDadosStore();
  const [acontecendo, setAcontecendo] = useState(false);

  useEffect(() => atualizaColecao(), []);

  function atualizaColecao() {
    firestore()
      .collection(user.id)
      .doc("Coleção de Viagens")
      .collection("1")
      .doc(item.id)
      .onSnapshot((docSnap) => {
        try {
          setAcontecendo(docSnap.data().acontecendo);
        } catch (err) {}
      });
  }
  return { acontecendo };
}
