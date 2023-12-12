import { createStackNavigator } from "@react-navigation/stack";
import RevisaoViagemAvulsa from "../screens/RevisaoViagemAvulsa";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import BottomNav from "./bottonNav";
import AnotacaoViagem from "../screens/AnotacaoViagem";
import RevisaoViagemCompleta from "../screens/RevisaoViagemCompleta";
import { RootStackParamListStack } from "./types/stack";
import ColecaoViagem from "../screens/ColecaoViagem";
import AnotacaoColecaoViagem from "../screens/AnotacaoColecaoViagem";
import IdaVoltaColecao from "../screens/IdaVoltaColecao";

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
      <Stack.Screen name="ColecaoViagem" component={ColecaoViagem} />
      <Stack.Screen
        name="AnotacaoColecaoViagem"
        component={AnotacaoColecaoViagem}
      />
      <Stack.Screen name="IdaVoltaColecao" component={IdaVoltaColecao} />
    </Stack.Navigator>
  );
}
