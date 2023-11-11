import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import MyStack from "./src/Router/stackNav";
import useAnonymosSignIn from "./src/hooks/useAnonymosSignIn";
import Toast from "./src/components/Toast/index";

export default function App() {
  const { initializing } = useAnonymosSignIn();

  if (initializing) return null;

  return (
    <>
      <Toast />
      <NavigationContainer>
        <StatusBar translucent={true} style="dark" />
        <MyStack />
      </NavigationContainer>
    </>
  );
}
