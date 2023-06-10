import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

// Vistas Alumnos
import AlumnoScreen from "../screens/Alumnos/Alumnos";
import AlumnoDetailScreen from "../screens/Alumnos/AlumnoDetail";
import AlumnoAddScreen from "../screens/Alumnos/AlumnoAdd";

// Vistas Docentes
import DocenteScreen from "../screens/Docentes/Docentes";
import DocenteDetailScreen from "../screens/Docentes/DocentesDetail";
import DocenteAddScreen from "../screens/Docentes/DocentesAdd";

// Vistas Materias
import MateriaScreen from "../screens/Materias/Materias";
import MateriaDetailScreen from "../screens/Materias/MateriasDetail";
import MateriaAddScreen from "../screens/Materias/MateriasAdd";

// Vistas Calificaciones
import CalificacionScreen from "../screens/Calificaciones/Calificaciones";
import CalificacionDetailScreen from "../screens/Calificaciones/CalificacionesDetail";
import CalificacionAddScreen from "../screens/Calificaciones/CalificacionesAdd";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const AlumnoStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Alumno"
        component={AlumnoScreen}
        options={({ navigation, route }) => ({
          title: "Lista de alumnos",
          headerRight: () => (
            <Ionicons
              name={"ios-add-circle"}
              size={25}
              color={"white"}
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate("AlumnoAdd")}
            />
          ),
        })}
      />
      <Stack.Screen name="AlumnoDetail" component={AlumnoDetailScreen} />
      <Stack.Screen name="AlumnoAdd" component={AlumnoAddScreen} />
    </Stack.Navigator>
  );
};

const DocenteStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Docente" component={DocenteScreen} />
      <Stack.Screen name="DocenteDetail" component={DocenteDetailScreen} />
      <Stack.Screen name="DocenteAdd" component={DocenteAddScreen} />
    </Stack.Navigator>
  );
};

const MateriaStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Materia" component={MateriaScreen} />
      <Stack.Screen name="MateriaDetail" component={MateriaDetailScreen} />
      <Stack.Screen name="MateriaAdd" component={MateriaAddScreen} />
    </Stack.Navigator>
  );
};

const CalificacionStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Calificacion" component={CalificacionScreen} />
      <Stack.Screen
        name="CalificacionDetail"
        component={CalificacionDetailScreen}
      />
      <Stack.Screen name="CalificacionAdd" component={CalificacionAddScreen} />
    </Stack.Navigator>
  );
};

export {
  AlumnoStackNavigator,
  DocenteStackNavigator,
  MateriaStackNavigator,
  CalificacionStackNavigator,
};
