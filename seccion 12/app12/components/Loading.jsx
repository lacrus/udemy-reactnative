import { View, ActivityIndicator, StyleSheet } from "react-native";

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
  },
});
