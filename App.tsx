import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import MyStack from "./src/Router/stackNav";
import useAnonymosSignIn from "./src/hooks/useAnonymosSignIn";
import Toast from "./src/components/Toast/index";
import { ThemeProvider } from "styled-components/native";
import { light } from "./src/theme/light";
import { dark } from "./src/theme/dark";
import useInitializeTheme from "./src/hooks/useInitializeTheme";

export default function App() {
  const { initializing } = useAnonymosSignIn();
  const { theme } = useInitializeTheme();

  if (initializing) return null;

  return (
    <ThemeProvider theme={theme == "light" ? light : dark}>
      <Toast />
      <NavigationContainer>
        <StatusBar translucent={true} style="dark" />
        <MyStack />
      </NavigationContainer>
    </ThemeProvider>
  );
}
