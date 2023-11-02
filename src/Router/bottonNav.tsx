import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Viagem from "../screens/Viagens";

type RootStackParamList = {
  TelaInicial: undefined;
  Viagens: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();
type Icon = "home" | "home-outline" | "airplane" | "airplane-outline";
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
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="TelaInicial"
        component={Home}
        options={{ tabBarHideOnKeyboard: true }}
      />
      <Tab.Screen name="Viagens" component={Viagem} />
    </Tab.Navigator>
  );
}
