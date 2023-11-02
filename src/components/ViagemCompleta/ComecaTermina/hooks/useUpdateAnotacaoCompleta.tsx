import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "../../../../context/dadosStore";

export function useUpdateAnotacaoCompleta(
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  setDescricao: React.Dispatch<React.SetStateAction<string>>
) {
  const { viagemCompletaStore } = useDadosStore();

  function addAnotacao(descricaoExtra: string, tipoTermina: boolean) {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let data = date + "/" + month + "/" + year;

    let hour = newDate.getHours();
    let minutes = newDate.getMinutes();
    let hora = hour + ":" + minutes;

    if (tipoTermina) {
      firestore()
        .collection("Viagem")
        .doc(viagemCompletaStore.id)
        .update({ chegando: { data, hora, descricaoExtra }, finalizado: true })
        .then(() => console.log("Foi"))
        .catch((err) => console.log(err));
    } else {
      firestore()
        .collection("Viagem")
        .doc(viagemCompletaStore.id)
        .update({ partindo: { data, hora, descricaoExtra } })
        .then(() => console.log("Foi"))
        .catch((err) => console.log(err));
    }
    setDescricao("");
    setShowModal(false);
  }
  return { addAnotacao };
}
