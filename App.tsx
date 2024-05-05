import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import MyStack from "./src/Router/stackNav";
import useAnonymosSignIn from "./src/hooks/useAnonymosSignIn";
import { ThemeProvider } from "styled-components/native";
import { light } from "./src/theme/light";
import { dark } from "./src/theme/dark";
import useInitializeTheme from "./src/hooks/useInitializeTheme";
import { Toast } from "@/components";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const { initializing } = useAnonymosSignIn();
  const { theme } = useInitializeTheme();

  if (initializing) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme == "light" ? light : dark}>
        <NavigationContainer>
          <StatusBar translucent={true} style="dark" />
          <MyStack />
        </NavigationContainer>
        <Toast />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
