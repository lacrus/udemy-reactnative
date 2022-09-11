import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [s.button, pressed && s.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

const s = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: { opacity: 0.7 },
});
