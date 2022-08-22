import {
  Image,
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function DetalleComida({
  titulo,
  imagen,
  duracion,
  complejidad,
  asequibilidad,
  id,
}) {
  const navigation = useNavigation();

  function detalleComidasHandler() {
    navigation.navigate("InfoComida", {
      titulo: titulo,
      id: id,
    });
  }

  return (
    <View style={styles.contenedor}>
      <Pressable
        android_ripple={{ color: "#000" }}
        style={({ pressed }) =>
          pressed ? [styles.pressable, styles.enPresion] : styles.pressable
        }
        onPress={detalleComidasHandler}
      >
        <View style={styles.contenedorInterno}>
          <Image source={{ uri: imagen }} style={styles.imagen} />
          <View style={styles.titulo}>
            <Text style={styles.textoTitulo}>{titulo}</Text>
          </View>
          <View style={styles.informacion}>
            <Text>{duracion}'</Text>
            <Text>{complejidad.toUpperCase()}</Text>
            <Text>{asequibilidad.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    height: 250,
    borderRadius: 16,
    marginBottom: 15,
    elevation: 4,
    shadowColor: "white",
    shadowOffset: { width: 10, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  pressable: {
    flex: 1,
  },
  contenedorInterno: {
    flex: 1,
    borderRadius: 16,
    overflow: Platform.OS === "ios" ? "hidden" : "visible",
  },
  imagen: {
    flex: 7,
    width: "100%",
    height: 200,
  },
  titulo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  textoTitulo: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  informacion: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  enPresion: {
    opacity: 0.55,
  },
});
