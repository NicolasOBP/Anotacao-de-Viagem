import { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import { useDadosStore } from "@/context";

export const useAnonymosSignIn = () => {
  const { setUser, setAnonymousId } = useDadosStore();
  const [initializing, setInitializing] = useState(true);

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
};
