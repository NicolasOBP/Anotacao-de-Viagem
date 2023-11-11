import firestore from "@react-native-firebase/firestore";
import { useDadosStore } from "../../../context/dadosStore";

export default function useAddToGoogleAnota() {
  const { user, anonymousId } = useDadosStore();

  console.log(user.id, " => ", anonymousId);
  const anonymousNotesRef = firestore().collection(anonymousId);
  const anonymousAvulsaRef = firestore()
    .collection(anonymousId)
    .doc("Viagem Avulsa")
    .collection("1");

  function addToGoogleAnotacao() {
    setCompleta();
    setAvulsa();
  }

  function setCompleta() {
    try {
      anonymousNotesRef
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const noteData = doc.data();
            const noteId = doc.id;

            // Adicionar as anotações ao usuário autenticado
            const userNotesRef = firestore().collection(user.id);

            userNotesRef
              .doc(noteId)
              .set(noteData)
              .then(() => {
                console.log("Anotação movida com sucesso");
              })
              .catch((error) => {
                console.error("Erro ao mover anotação", error);
              });
          });
        })
        .catch((error) => {
          console.error(
            "Erro ao recuperar anotações do usuário anônimo",
            error
          );
        });
    } catch (e) {
      console.log(e);
    }
  }
  function setAvulsa() {
    anonymousAvulsaRef
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const tripData = doc.data();
          const tripId = doc.id;

          const userAvulsaRef = firestore()
            .collection(user.id)
            .doc("Viagem Avulsa")
            .collection("1");

          userAvulsaRef
            .doc(tripId)
            .set(tripData)
            .then(() => {
              console.log("Viagem avulsa movida com sucesso");
            })
            .catch((error) => {
              console.error("Erro ao mover viagem avulsa", error);
            });
        });
      })
      .catch((error) => {
        console.error(
          "Erro ao recuperar viagens avulsas do usuário anônimo",
          error
        );
      });
  }

  return { addToGoogleAnotacao };
}
