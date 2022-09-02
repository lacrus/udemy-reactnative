import { useContext } from "react";
import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

export default function RecentExpenses() {
  const expensesContext = useContext(ExpensesContext);

  const recentExpenses = expensesContext.expenses.filter((i) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return i.date >= date7DaysAgo && i.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Ultimos 7 dias"
      fallbackText="Sin gastos registrados en los últimos 7 días"
    />
  );
}
