import { createStackNavigator } from "@react-navigation/stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomNav } from "./bottonNav";
import { RootStackParamListStack } from "./types/stack";
import { NavigationProp } from "@react-navigation/native";
import * as Screen from "@/screens";

const Stack = createStackNavigator<RootStackParamListStack>();

export type PropsNav = NativeStackScreenProps<RootStackParamListStack>;
export type Nav = NavigationProp<RootStackParamListStack>;

export const MyStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: "#26e0fd" } }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Tela"
        component={BottomNav}
      />
      <Stack.Screen
        name="RevisãoAvulsa"
        component={Screen.RevisaoViagemAvulsa}
      />
      <Stack.Screen name="AnotaçãoViagem" component={Screen.AnotacaoViagem} />
      <Stack.Screen
        name="RevisãoAnotação"
        component={Screen.RevisaoViagemCompleta}
      />
      <Stack.Screen name="ColecaoViagem" component={Screen.ColecaoViagem} />
      <Stack.Screen
        name="AnotacaoColecaoViagem"
        component={Screen.AnotacaoColecaoViagem}
      />
      <Stack.Screen name="IdaVoltaColecao" component={Screen.IdaVoltaColecao} />
    </Stack.Navigator>
  );
};
