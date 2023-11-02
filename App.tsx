
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import MyStack from "./src/Router/stackNav";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} style="dark" />
      <MyStack />
    </NavigationContainer>
  );
}
