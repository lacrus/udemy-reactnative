import { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import Error from "../components/ExpensesOutput/UI/Error";
import Loading from "../components/ExpensesOutput/UI/Loading";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

export default function RecentExpenses() {
  const [estaCargando, setEstaCargando] = useState(true);
  const [hayError, setHayError] = useState(false);
  const expensesContext = useContext(ExpensesContext);
  // const [fetchedExpenses, setFetchedExpenses] = useState([]);

  useEffect(() => {
    async function getExpenses() {
      setEstaCargando(true);
      try {
        const expenses = await fetchExpenses();
        // console.log("expenses: ", expenses);
        // setFetchedExpenses(expenses);
        expensesContext.setExpenses(expenses);
      } catch (error) {
        setHayError("No pudimos cargar tus gastos");
      }
      setEstaCargando(false);
    }
    getExpenses();
  }, []);

  const recentExpenses = expensesContext.expenses.filter((i) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return i.date >= date7DaysAgo && i.date <= today;
  });

  // const recentExpenses = fetchedExpenses.filter((i) => {
  //   const today = new Date();
  //   const date7DaysAgo = getDateMinusDays(today, 7);
  //   return i.date >= date7DaysAgo && i.date <= today;
  // });

  function cerrarHandler() {
    setHayError(null);
    async function getExpenses() {
      setEstaCargando(true);
      try {
        const expenses = await fetchExpenses();
        // console.log("expenses: ", expenses);
        // setFetchedExpenses(expenses);
        expensesContext.setExpenses(expenses);
      } catch (error) {
        setHayError("No pudimos cargar tus gastos");
      }
      setEstaCargando(false);
    }
    getExpenses();
  }

  if (hayError && !estaCargando) {
    return <Error message={hayError} onConfirm={cerrarHandler} />;
  }

  if (estaCargando) {
    return <Loading />;
  }

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Ultimos 7 dias"
      fallbackText="Sin gastos registrados en los últimos 7 días"
    />
  );
}
