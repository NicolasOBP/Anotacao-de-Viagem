import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamListBootom } from "./types/booton";
import { mapIcons } from "./hooks/useMapIcons";
import { Icon } from "./types/icon";
import { Home, Viagem, AnotacaoAvulsa, Perfil } from "@/screens";

const Tab = createBottomTabNavigator<RootStackParamListBootom>();

export const BottomNav: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: Icon = "home";

          iconName = mapIcons[route.name][focused ? "focus" : "unfocus"];

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        headerStyle: { backgroundColor: "#26e0fd" },
      })}
    >
      <Tab.Screen
        name="TelaInicial"
        component={Home}
        options={{ tabBarHideOnKeyboard: true }}
      />

      <Tab.Screen name="Viagens" component={Viagem} />

      <Tab.Screen name="AnotacaoAvulsa" component={AnotacaoAvulsa} />

      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
};
