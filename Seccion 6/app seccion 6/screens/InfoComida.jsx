import { useLayoutEffect, useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import IconButton from "../components/IconButton";
import { FavoritosContexto } from "../store/context/favoritos-contexto.jsx";
import { useSelector, useDispatch } from "react-redux";
import { agregarFavorito, removeFavorite } from "../store/redux/favoritos";

import { MEALS } from "../data/dummy-data";

export default function InfoComida({ route, navigation }) {
  const { titulo, id } = route.params;

  const dispatch = useDispatch();

  const comidasFavoritasEstado = useSelector(
    (e) => e.estadoComidasFavoritas.ids
  );

  const comidaFavorita = comidasFavoritasEstado.includes(id);

  // const comidasFavoritasContexto = useContext(FavoritosContexto);
  // const comidaFavorita = comidasFavoritasContexto.ids.includes(id);
  const comidaSeleccionada = MEALS.find((i) => i.id === id);

  function botonFavoritoHandler() {
    if (comidaFavorita) {
      // comidasFavoritasContexto.eliminarFavoritos(id);
      dispatch(removeFavorite({ id: id }));
    } else {
      // comidasFavoritasContexto.agregarFavoritos(id);
      dispatch(agregarFavorito({ id: id }));
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.titulo,
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color={comidaFavorita ? "yellow" : "white"}
            onPress={botonFavoritoHandler}
          />
        );
      },
    });
  }, [navigation, botonFavoritoHandler]);

  return (
    <ScrollView style={styles.contenedor}>
      <Image
        style={styles.imagen}
        source={{ uri: comidaSeleccionada.imageUrl }}
      />
      <View style={styles.contenedorTitulo}>
        <Text style={[styles.titulo, styles.tituloPrincipal]}>{titulo}</Text>
      </View>
      <View style={styles.detalles}>
        <Text style={styles.texto}>{comidaSeleccionada.duration}'</Text>
        <Text style={styles.texto}>
          {comidaSeleccionada.complexity.toUpperCase()}
        </Text>
        <Text style={styles.texto}>
          {comidaSeleccionada.affordability.toUpperCase()}
        </Text>
      </View>

      <View style={styles.informacion}>
        <Text style={styles.titulo}>Ingredientes</Text>
        {comidaSeleccionada.ingredients.map((i) => {
          return (
            <View key={i} style={styles.data}>
              <Text style={[styles.texto, styles.textoLista]}>{i}</Text>
            </View>
          );
        })}

        <Text style={styles.titulo}>Pasos</Text>
        {comidaSeleccionada.steps.map((i) => {
          return (
            <View key={i} style={styles.data}>
              <Text style={[styles.texto, styles.textoLista]}>{i}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    padding: 16,
  },
  imagen: {
    height: 300,
    width: "100%",
  },
  contenedorTitulo: {
    padding: 10,
  },
  tituloPrincipal: {
    fontSize: 25,
  },
  detalles: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  titulo: {
    paddingVertical: 10,
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  informacion: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  data: {
    margin: 5,
    padding: 5,
    width: "80%",
    backgroundColor: "#fafafa",
    borderRadius: 6,
  },
  texto: {
    color: "white",
    textAlign: "center",
  },
  textoLista: {
    color: "black",
  },
});
