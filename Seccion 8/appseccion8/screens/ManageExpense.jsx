import { useContext, useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import IconButton from "../components/ExpensesOutput/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ExpensesOutput/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { deleteExpense, storeExpense, updateExpense } from "../util/http";
import Loading from "../components/ExpensesOutput/UI/Loading";
import Error from "../components/ExpensesOutput/UI/Error";

export default function ManageExpense({ route, navigation }) {
  const [estaCargando, setEstaCargando] = useState(false);
  const [hayError, setHayError] = useState();
  const expensesContext = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesContext.expenses.find(
    (i) => i.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Editar Gasto" : "Agregar Gasto",
    });
  }, [isEditing, navigation]);

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHanlder(expenseData) {
    setEstaCargando(true);
    try {
      if (isEditing) {
        expensesContext.updateExpense(editedExpenseId, expenseData);
        await updateExpense(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expensesContext.addExpense({ ...expenseData, id: id });
      }
      navigation.goBack();
      // setEstaCargando(false);
    } catch (error) {
      setHayError(
        "No pudimos guardar el gasto, por favor intentalo mas tarde!"
      );
      setEstaCargando(false);
    }
  }

  async function deleteExpenseHandler() {
    setEstaCargando(true);
    try {
      expensesContext.deleteExpense(editedExpenseId);
      await deleteExpense(editedExpenseId);
      navigation.goBack();
    } catch (error) {
      setHayError("No pudimos eliminar el gasto, por favor intenta mas tarde!");
      setEstaCargando(false);
    }
  }

  function cerrarHandler() {
    setHayError(null);
  }

  if (hayError && !estaCargando) {
    return <Error message={hayError} onConfirm={cerrarHandler} />;
  }

  if (estaCargando) {
    return <Loading />;
  }

  return (
    <ScrollView style={s.container}>
      <KeyboardAvoidingView behavior="position">
        <ExpenseForm
          submitBotonLabel={isEditing ? "Modificar" : "Agregar"}
          onSubmit={confirmHanlder}
          onCancel={cancelHandler}
          defaultValues={selectedExpense}
        />
        {isEditing && (
          <View style={s.deleteContainer}>
            <IconButton
              icon="trash"
              color={GlobalStyles.colors.error500}
              size={36}
              onPress={deleteExpenseHandler}
            />
          </View>
        )}
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  teclado: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
