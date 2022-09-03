import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import Button from "./Button";

export default function Error({ message, onConfirm }) {
  return (
    <View style={s.container}>
      <Text style={[s.text, s.title]} size="large" color="white">
        Ocurrio un error!
      </Text>
      <Text style={s.text}>{message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
