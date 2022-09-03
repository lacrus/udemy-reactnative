import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Input from "./Input";
import Button from "../ExpensesOutput/UI/Button";
import { getformatterDate } from "../../util/date";
import { GlobalStyles } from "../../constants/styles";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function ExpenseForm({
  submitBotonLabel,
  onSubmit,
  onCancel,
  defaultValues,
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    // date: defaultValues ? getformatterDate(defaultValues.date) : "",
    date: {
      value: defaultValues ? defaultValues.date : new Date(),
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });
  const [show, setShow] = useState(false);

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function handleConfirm(selectedDate) {
    setInputs((actual) => {
      return { ...actual, date: { value: selectedDate, isValid: true } };
    });
    setShow(false);
  }

  function cancelHandler() {}

  function submitHandler() {
    const expenseData = {
      amount: isNaN(+inputs.amount.value)
        ? +inputs.amount.value.split(",").join(".")
        : +inputs.amount.value,
      // date: new Date(inputs.date.value),
      date: inputs.date.value,
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((i) => {
        return {
          amount: { value: i.amount.value, isValid: amountIsValid },
          date: { value: i.date.value, isValid: dateIsValid },
          description: {
            value: i.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }
    onSubmit(expenseData);
  }

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={s.form}>
      <Text style={s.title}>Tu Gasto</Text>
      <View style={s.inputsRow}>
        <Input
          invalid={!inputs.amount.isValid}
          style={s.rowInput}
          label="Monto"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />
        {/* <Input
          style={s.rowInput}
          label="Fecha"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: getformatterDate(inputValue.date),
          }}
        /> */}
        <View style={s.contenedorFecha}>
          <Text style={s.label}>Fecha</Text>
          <Button
            style={s.buttonFecha}
            children={getformatterDate(inputs.date.value)}
            onPress={() => setShow(!show)}
            mode={""}
          />
        </View>
        <DateTimePickerModal
          isVisible={show}
          mode="date"
          // locale="es_ES"
          onConfirm={handleConfirm}
          onCancel={() => setShow(false)}
          date={inputs.date.value}
        />
      </View>
      <Input
        invalid={!inputs.description.isValid}
        label="Descripción"
        textInputConfig={{
          multiline: true,
          autoCapitalize: "sentences",
          autoCorrect: true, //es true por default
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
      />
      <View style={s.buttons}>
        <Button style={s.button} mode="flat" onPress={onCancel}>
          Cancelar
        </Button>
        <Button style={s.button} mode="" onPress={submitHandler}>
          {submitBotonLabel}
        </Button>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  contenedorFecha: {
    flex: 1,
    justifyContent: "center",
  },
  buttonFecha: {
    minWidth: "50%",
    justifyContent: "center",
    // backgroundColor: GlobalStyles.colors.primary100,
    color: "black",
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
});
