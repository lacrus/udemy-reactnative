import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

export default function Button({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [s.button, pressed && s.pressed]}
      onPress={onPress}
    >
      <Text style={s.text}>{children}</Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
    marginTop: 6,
    backgroundColor: Colors.primary800,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    borderRadius: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.primary50,
  },
});
