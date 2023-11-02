import firestore from "@react-native-firebase/firestore";

type itemCompleta = {
  saindo: string;
  indo: string;
};
export function useCriaViagemCompleta(
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
) {
  function addAnotacao(item: itemCompleta) {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let dataCriacao = date + "/" + month + "/" + year;

    const isFieldsEmpty = item.saindo == "" || item.indo == "";
    if (isFieldsEmpty) alert("Preencha todos os campos");
    else {
      firestore()
        .collection("Viagem")
        .doc(item.saindo + "_" + item.indo + Math.random())
        .set({ ...item, dataCriacao, timestamp: new Date().getTime() })
        .then(() => console.log("Foi"))
        .catch((err) => console.log(err));

      setShowModal(false);
    }
  }
  return { addAnotacao };
}
