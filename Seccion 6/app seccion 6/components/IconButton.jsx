import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ onPress, icon, color }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.apretado}
    >
      <Ionicons name={icon} size={30} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  apretado: {
    opacity: 0.35,
  },
});
