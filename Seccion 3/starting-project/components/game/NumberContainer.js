import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";
export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
const anchoDispositivo = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    fontFamily: "open-sans",
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: anchoDispositivo < 380 ? 12 : 24,
    margin: anchoDispositivo < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: anchoDispositivo < 380 ? 30 : 36,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
