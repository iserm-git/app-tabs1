import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function AlumnoDetail({ route, navigation }) {
  const { item } = route.params;

  const [alumno, setAlumno] = useState({
    nomAlumno: item.nomAlumno,
    edad: String(item.edad),
  });

  const onChangeNombre = (value) => {
    setAlumno({ ...alumno, nomAlumno: value });
  };

  const onChangeEdad = (value) => {
    setAlumno({ ...alumno, edad: value });
  };

  const updateData = () => {
    var myHeaders = new Headers();

    // myHeaders.append(
    //   "Authorization",
    //   "Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263"
    // );

    myHeaders.append("Content-Type", "application/json");

    fetch("http://192.168.1.148:3000/alumnos/" + item.idAlumno, {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify({
        nomAlumno: alumno.nomAlumno,
        edad: parseInt(alumno.edad),
      }),
    })
      .then((response) => {
        response.text();
        navigation.push("Alumno");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const deleteData = () => {
    var myHeaders = new Headers();

    // myHeaders.append(
    //   "Authorization",
    //   "Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263"
    // );

    myHeaders.append("Content-Type", "application/json");

    fetch("http://192.168.1.148:3000/alumnos/" + item.idAlumno, {
      method: "DELETE",
      headers: myHeaders,
      body: JSON.stringify({
        nomAlumno: alumno.nomAlumno,
        edad: parseInt(alumno.edad),
      }),
    })
      .then((response) => {
        response.text();
        navigation.push("Alumno");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={"Nombre"}
        onChangeText={(value) => onChangeNombre(value)}
        style={styles.input}
        value={alumno.nomAlumno}
      />
      <TextInput
        placeholder={"Edad"}
        onChangeText={(value) => onChangeEdad(value)}
        style={styles.input}
        value={alumno.edad}
      />

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={updateData}>
          <View style={{ backgroundColor: "blue", padding: 10 }}>
            <Text style={{ color: "white", textAlign: "center" }}>
              Guardar cambios
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteData}>
          <View style={{ backgroundColor: "red", padding: 10 }}>
            <Text style={{ color: "white", textAlign: "center" }}>Borrar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
  },
});
