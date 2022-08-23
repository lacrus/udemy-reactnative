import { View, FlatList, StyleSheet } from "react-native";

import DetalleComida from "./DetalleComida.jsx";

export default function Listado({ items }) {
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
        data={items}
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
    backgroundColor: "#000",
  },
});
