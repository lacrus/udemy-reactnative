import { MEALS, CATEGORIES } from "../data/dummy-data";

import { View, Text, StyleSheet, FlatList } from "react-native";

import DetalleComida from "../components/DetalleComida";
import { useLayoutEffect } from "react";

export default function ListadoComidas({ route, navigation }) {
  const catId = route.params.categoryId;
  const comidas = MEALS.filter((i) => i.categoryIds.includes(catId));

  useLayoutEffect(() => {
    const nombreCategoria = CATEGORIES.filter(
      (i) => i.id === route.params.categoryId
    )[0].title;

    navigation.setOptions({ title: nombreCategoria });
  }, [catId, navigation]);

  function renderComidas(itemData) {
    return (
      <DetalleComida
        id={itemData.item.id}
        titulo={itemData.item.title}
        imagen={itemData.item.imageUrl}
        duracion={itemData.item.duration}
        complejidad={itemData.item.complexity}
        asequibilidad={itemData.item.affordability}
      />
    );
  }

  return (
    <View style={styles.contenedor}>
      <FlatList
        data={comidas}
        keyExtractor={(i) => i.id}
        renderItem={renderComidas}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
  },
});
