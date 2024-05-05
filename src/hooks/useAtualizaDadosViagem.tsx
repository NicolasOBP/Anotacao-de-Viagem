import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "@/context";
import { NovaViagem } from "@/types";
import { useEffect, useState } from "react";

export const useAtualizaDadosViagem = (item: NovaViagem) => {
  const { user, setDadosColecaoViagem, setColecoStatusStore } = useDadosStore();
  const [dadosAtualizados, setDadosAtualizados] = useState<NovaViagem>();

  useEffect(() => {
    atualizaDados();
  }, []);

  async function atualizaDados() {
    const dados = await firestore()
      .collection(user.id)
      .doc("Coleção de Viagens")
      .collection("1")
      .doc(item.idPai)
      .collection("Viagens")
      .doc(item.id)
      .get();

    setDadosAtualizados(dados.data() as NovaViagem);
    setDadosColecaoViagem(dados.data() as NovaViagem);
    setColecoStatusStore(dados.data().status);
  }
  return { dadosAtualizados, atualizaDados };
};
