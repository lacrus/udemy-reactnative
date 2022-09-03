import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

export default function Loading() {
  return (
    <View style={s.container}>
      <ActivityIndicator size="large" color="white" />
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
});
