import firestore from "@react-native-firebase/firestore";

export function useDeletaViagemCompleta() {
  function delCompleta(id: string) {
    firestore().collection("Viagem").doc(id).delete();
  }
  return { delCompleta };
}
