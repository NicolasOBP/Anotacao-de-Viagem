import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Viagem from "../screens/Viagens";
import { RootStackParamListBootom } from "./types/booton";
import Perfil from "../screens/Perfil";

const Tab = createBottomTabNavigator<RootStackParamListBootom>();
type Icon =
  | "home"
  | "home-outline"
  | "airplane"
  | "airplane-outline"
  | "person-circle"
  | "person-circle-outline";
export default function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: Icon = "home";

          if (route.name == "TelaInicial") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name == "Viagens") {
            iconName = focused ? "airplane" : "airplane-outline";
          } else if (route.name == "Perfil") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }
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
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}
