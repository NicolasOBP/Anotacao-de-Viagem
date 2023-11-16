import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import MyStack from "./src/Router/stackNav";
import useAnonymosSignIn from "./src/hooks/useAnonymosSignIn";
import Toast from "./src/components/Toast/index";
import { ThemeProvider } from "styled-components/native";
import light from "./src/theme/light";
import dark from "./src/theme/dark";
import { useDadosStore } from "./src/context/dadosStore";
import { useEffect } from "react";
import { storage } from "./src/context/mmkv";

export default function App() {
  const { initializing } = useAnonymosSignIn();
  const { theme, setTheme } = useDadosStore();

  useEffect(() => {
    const storageTheme = storage.getString("theme.type") as "light" | "dark";
    setTheme(storageTheme);
  }, []);

  if (initializing) return null;

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Toast />
      <NavigationContainer>
        <StatusBar translucent={true} style="dark" />
        <MyStack />
      </NavigationContainer>
    </ThemeProvider>
  );
}
