import { View, TextInput, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

export default function Input({ invalid, label, style, textInputConfig }) {
  let inputStyles = [s.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(s.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(s.invalidInput);
  }

  return (
    <View style={[s.inputContainer, style]}>
      <Text style={[s.label, invalid && s.invalidLabel]}>{label}</Text>
      <TextInput {...textInputConfig} style={inputStyles} />
    </View>
  );
}

const s = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
