import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  AlumnoStackNavigator,
  DocenteStackNavigator,
  MateriaStackNavigator,
  CalificacionStackNavigator,
} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "AlumnosTab") {
            iconName = focused ? "people-outline" : "people";
          } else if (route.name === "DocentesTab") {
            iconName = focused ? "body-outline" : "body";
          } else if (route.name === "MateriasTab") {
            iconName = focused ? "book-outline" : "book";
          } else if (route.name === "CalificacionesTab") {
            iconName = focused ? "pencil-outline" : "pencil";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="AlumnosTab"
        component={AlumnoStackNavigator}
        options={{
          tabBarLabel: "Alumnos",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="DocentesTab"
        component={DocenteStackNavigator}
        options={{
          tabBarLabel: "Docentes",
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="MateriasTab"
        component={MateriaStackNavigator}
        options={{
          tabBarLabel: "Materias",
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="CalificacionesTab"
        component={CalificacionStackNavigator}
        options={{
          tabBarLabel: "Calificaciones",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
