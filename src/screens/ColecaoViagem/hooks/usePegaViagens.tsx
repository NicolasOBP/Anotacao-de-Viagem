import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "@/context";
import { ColecaoViagem, NovaViagem } from "@/types";
import { useEffect, useState } from "react";

export default function usePegaViagens(item: ColecaoViagem) {
  const [viagens, setViagens] = useState<NovaViagem[]>([]);
  const { user } = useDadosStore();

  useEffect(() => pegaViagem(), [user.id]);

  function pegaViagem() {
    firestore()
      .collection(user.id)
      .doc("Coleção de Viagens")
      .collection("1")
      .doc(item.id)
      .collection("Viagens")
      .orderBy("timestamp", "desc")
      .onSnapshot((docSnap) => {
        const newViagem: NovaViagem[] = [];
        docSnap.forEach((itemDoc) => {
          const data = {
            ...(itemDoc.data() as NovaViagem),
            id: itemDoc.id,
            idPai: item.id,
          };

          newViagem.push(data);
        });
        setViagens(newViagem);
      });
  }
  return { viagens };
}
