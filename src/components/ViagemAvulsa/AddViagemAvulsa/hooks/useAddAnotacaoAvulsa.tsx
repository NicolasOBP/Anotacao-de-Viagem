import firestore from "@react-native-firebase/firestore";

type itemAvulsa = {
  saindo: string;
  indo: string;
  KmPercorrido: string;
  VeloFeita: string;
  VeloVia: string;
  consumo: string;
  ar: string;
  descricao?: string;
};
export function useAddViagemAvulsa(
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  setDescricao: React.Dispatch<React.SetStateAction<string>>
) {
  function addAnotacao(item: itemAvulsa) {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let data = date + "/" + month + "/" + year;

    let hour = newDate.getHours();
    let minutes = newDate.getMinutes();
    let hora = hour + ":" + minutes;

    const isValid1 = /^[0-9,.]+$/.test(item.KmPercorrido);
    const isValid2 = /^[0-9,.]+$/.test(item.VeloVia);
    const isValid3 = /^[0-9,.]+$/.test(item.VeloFeita);
    const isValid4 = /^[0-9,.]+$/.test(item.consumo);
    const isValid5 = /^[0-9,.]+$/.test(item.ar);

    const isEmpyt =
      item.saindo == "" ||
      item.indo == "" ||
      item.KmPercorrido == "" ||
      item.VeloVia == "" ||
      item.VeloFeita == "" ||
      item.consumo == "" ||
      item.ar == "";
    const hasNumber =
      isValid1 == false ||
      isValid2 == false ||
      isValid3 == false ||
      isValid4 == false ||
      isValid5 == false;
    if (isEmpyt) alert("Preencha todos os campos");
    else if (hasNumber) {
      alert("Detectado letras nos campos impróprio");
    } else {
      firestore()
        .collection("Viagem")
        .doc("Viagem Avulsa")
        .collection("1")
        .add({ ...item, hora, data, timestamp: new Date().getTime() })
        .then(() => console.log("Foi"))
        .catch((err) => console.log(err));

      setDescricao("");
      setShowModal(false);
    }
  }
  return { addAnotacao };
}
