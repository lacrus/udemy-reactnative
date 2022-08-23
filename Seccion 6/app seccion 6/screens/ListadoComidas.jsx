import { MEALS, CATEGORIES } from "../data/dummy-data";

import { View, Text, StyleSheet, FlatList } from "react-native";

import Listado from "../components/Listado";

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

  return <Listado items={comidas} />;
}
