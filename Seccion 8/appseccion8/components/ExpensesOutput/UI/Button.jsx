import { Text, Pressable, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

export default function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && s.pressed}
      >
        <View style={[s.button, mode === "flat" && s.flat]}>
          <Text style={[s.buttonText, mode === "flat" && s.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
