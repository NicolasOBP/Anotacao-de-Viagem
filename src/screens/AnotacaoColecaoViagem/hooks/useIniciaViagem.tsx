import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "@/context";
import { NovaViagem } from "@/types";
import { useHoraData } from "@/hooks";

export const useIniciaViagem = (item: NovaViagem) => {
  const { user, setColecoStatusStore } = useDadosStore();
  const { Data, Hora } = useHoraData();

  function iniciaViagem() {
    setColecoStatusStore("Iniciado, ida");

    firestore()
      .collection(user!.id!)
      .doc("Coleção de Viagens")
      .collection("1")
      .doc(item.idPai)
      .collection("Viagens")
      .doc(item.id)
      .update({
        idPai: item.idPai,
        id: item.id,
        status: "Iniciado, ida",
        ida: {
          hora: Hora(),
          data: Data(),
        },
      });
  }
  return { iniciaViagem };
};
