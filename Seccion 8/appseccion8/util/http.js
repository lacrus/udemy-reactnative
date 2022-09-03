import axios from "axios";

const URL_DB = "https://gastos-436df-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  const response = await axios.post(URL_DB + "/expenses.json", expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(URL_DB + "/expenses.json");

  const expenses = [];

  //   console.log(response.data);
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(URL_DB + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(URL_DB + `/expenses/${id}.json`);
}
