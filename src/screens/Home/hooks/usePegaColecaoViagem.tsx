import { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "@/context";
import { ColecaoViagem } from "@/types";

export function usePegaColecaoViagem() {
  const [colecaoViagem, setColecao] = useState<ColecaoViagem[]>([]);
  const { user } = useDadosStore();

  useEffect(() => ColecaoViagem(), [user!.id]);

  function ColecaoViagem() {
    try {
      firestore()
        .collection(user!.id!)
        .doc("Coleção de Viagens")
        .collection("1")
        .onSnapshot((docSnap) => {
          try {
            const newColecao: ColecaoViagem[] = [];

            docSnap.forEach((item) => {
              const data = { ...(item.data() as ColecaoViagem), id: item.id };

              newColecao.push(data);
            });

            setColecao(newColecao);
          } catch (err) {}
        });
    } catch (e) {
      console.log(e);
    }
  }

  return { colecaoViagem };
}
