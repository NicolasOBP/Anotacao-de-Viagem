import { useEffect, useState } from "react";
import { useDadosStore } from "../context/dadosStore";
import auth from "@react-native-firebase/auth";

export default function useAnonymosSignIn() {
  const { setUser, setAnonymousId, user, anonymousId } = useDadosStore();
  const [initializing, setInitializing] = useState(true);

  console.log(user.id, " => ", anonymousId);

  useEffect(() => {
    try {
      setUser({
        displayName: auth().currentUser.displayName,
        email: auth().currentUser.email,
        id: auth().currentUser.uid,
        photo: auth().currentUser.photoURL,
      });
      setAnonymousId(auth().currentUser.uid);
      setInitializing(false);
    } catch (e) {
      anonymousSignin();
    }
  }, []);

  function anonymousSignin() {
    auth()
      .signInAnonymously()
      .then(() => {
        setUser({
          displayName: auth().currentUser.displayName,
          email: auth().currentUser.email,
          id: auth().currentUser.uid,
          photo: auth().currentUser.photoURL,
        });
        setAnonymousId(auth().currentUser.uid);
        setInitializing(false);
      })
      .catch((error) => {
        if (error.code === "auth/operation-not-allowed") {
          console.log("Enable anonymous in your firebase console.");
        }
        console.error(error);
      });
  }

  return { initializing, anonymousSignin };
}
