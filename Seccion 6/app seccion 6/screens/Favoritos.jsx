import { useContext } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, Text } from "react-native";
import Listado from "../components/Listado";
// import { FavoritosContexto } from "../store/context/favoritos-contexto";
import { MEALS } from "../data/dummy-data";

export default function () {
  // const favoritosContexto = useContext(FavoritosContexto);
  const favoritosEstado = useSelector((e) => e.estadoComidasFavoritas.ids);

  const listaFavoritos = MEALS.filter(
    (i) => favoritosEstado.includes(i.id)
    // favoritosContexto.ids.includes(i.id)
  );

  if (listaFavoritos.length === 0) {
    return (
      <View style={styles.contenedor}>
        <Text style={styles.texto}>No tienes recetas favoritas aun.</Text>
      </View>
    );
  } else {
    return <Listado items={listaFavoritos} />;
  }
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  texto: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
  },
});
