import { View, StyleSheet } from "react-native";
import PrimaryButton from "./PrimaryButton";

export default function Buttons({
  textButtonLeft,
  textButtonRigth,
  onPressButtonLeft,
  onPressButtonRight,
}) {
  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onPressButtonLeft}>
          {textButtonLeft}
        </PrimaryButton>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onPressButtonRight}>
          {textButtonRigth}
        </PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
