import firestore from "@react-native-firebase/firestore";

export function useDeletaViagem() {
  function delAvulsa(id: string) {
    firestore()
      .collection("Viagem")
      .doc("Viagem Avulsa")
      .collection("1")
      .doc(id)
      .delete();
  }
  return { delAvulsa };
}
