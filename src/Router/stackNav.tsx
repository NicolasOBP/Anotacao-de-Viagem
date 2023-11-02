import { createStackNavigator } from "@react-navigation/stack";
import RevisaoViagemAvulsa from "../screens/RevisaoViagemAvulsa";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ViagemAvulsa } from "../types/viagemAvulsa";
import BottomNav from "./bottonNav";
import AnotacaoViagem from "../screens/AnotacaoViagem";
import { AnotacaoCompleta, ViagemCompleta } from "../types/viagemCompleta";
import RevisaoViagemCompleta from "../screens/RevisaoViagemCompleta";

export type RootStackParamList = {
  Tela: undefined;
  RevisãoAvulsa: { item: ViagemAvulsa };
  AnotaçãoViagem: { item: ViagemCompleta };
  RevisãoAnotação: { item: AnotacaoCompleta };
};

const Stack = createStackNavigator<RootStackParamList>();

export type PropsNav = NativeStackScreenProps<RootStackParamList>;

export default function MyStack() {
  return (
    <Stack.Navigator>
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
