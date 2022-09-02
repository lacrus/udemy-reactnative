import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "un par de zapatos",
    amount: 71.25,
    date: new Date("2022-08-30"),
  },
  {
    id: "e2",
    description: "unos pantalones",
    amount: 45.44,
    date: new Date("2021-11-28"),
  },
  {
    id: "e3",
    description: "fafafa",
    amount: 5.44,
    date: new Date("2021-11-15"),
  },
  {
    id: "e4",
    description: "gaseosa",
    amount: 10.44,
    date: new Date("2021-11-22"),
  },
  {
    id: "e5",
    description: "un caño de escape",
    amount: 100.44,
    date: new Date("2021-11-29"),
  },
  {
    id: "e61",
    description: "un par de zapatos",
    amount: 71.25,
    date: new Date("2022-08-30"),
  },
  {
    id: "e7",
    description: "unos pantalones",
    amount: 45.44,
    date: new Date("2021-11-28"),
  },
  {
    id: "e8",
    description: "fafafa",
    amount: 5.44,
    date: new Date("2021-11-15"),
  },
  {
    id: "e9",
    description: "gaseosa",
    amount: 10.44,
    date: new Date("2021-11-22"),
  },
  {
    id: "e0",
    description: "un caño de escape",
    amount: 100.44,
    date: new Date("2021-11-29"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (i) => i.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updateExpenses = [...state];
      updateExpenses[updatableExpenseIndex] = updatedItem;
      return updateExpenses;
    case "DELETE":
      return state.filter((i) => i.id !== action.payload);
    default:
      return state;
  }
}

export default function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
