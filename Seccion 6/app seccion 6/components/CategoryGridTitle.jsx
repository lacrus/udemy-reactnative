import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

export default function CategoryGridTitle({ title, color, onPress }) {
  const colorFondo = { backgroundColor: color };

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, colorFondo]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4,
    shadowColor: "white",
    shadowOffset: { width: -4, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 2,
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
