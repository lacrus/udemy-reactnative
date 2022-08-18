const { View, Text, StyleSheet, Pressable } = require("react-native");

export default function Items({ i, handleBorrarTarea, refInput }) {
  return (
    <Pressable
      android_ripple={{ color: "#210644" }}
      onPress={() => handleBorrarTarea(i.index)}
      style={({ pressed }) => pressed && styles.itemPresionado}
    >
      <View style={styles.itemLista}>
        <Text style={styles.textoLista}>{i.item.texto}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemLista: {
    margin: 3,
    borderRadius: 6,
    backgroundColor: "#fafafa",
  },
  itemPresionado: {
    opacity: 0.5,
  },
  textoLista: {
    textAlign: "center",
    padding: 6,
  },
});
