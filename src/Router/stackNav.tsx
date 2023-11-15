import { createStackNavigator } from "@react-navigation/stack";
import RevisaoViagemAvulsa from "../screens/RevisaoViagemAvulsa";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import BottomNav from "./bottonNav";
import AnotacaoViagem from "../screens/AnotacaoViagem";
import RevisaoViagemCompleta from "../screens/RevisaoViagemCompleta";
import { RootStackParamListStack } from "./types/stack";

const Stack = createStackNavigator<RootStackParamListStack>();

export type PropsNav = NativeStackScreenProps<RootStackParamListStack>;

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: "#26e0fd" } }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Tela"
        component={BottomNav}
      />
      <Stack.Screen name="RevisãoAvulsa" component={RevisaoViagemAvulsa} />
      <Stack.Screen name="AnotaçãoViagem" component={AnotacaoViagem} />
      <Stack.Screen name="RevisãoAnotação" component={RevisaoViagemCompleta} />
    </Stack.Navigator>
  );
}
