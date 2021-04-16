import React, { useState } from "react";

import "./App.css";
import ExpenseListItems from "./components/Expenses/ExpensesListItems";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import NewExpense from "./components/NewExpense/NewExpense";
const years = [
  { key: "1", year: "2022", selected: true },
  { key: "2", year: "2021" },
  { key: "3", year: "2020" },
  { key: "4", year: "2019" },
];

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 20),
    visible: true,
  },
  {
    id: "2",
    title: "New TV",
    amount: 799.99,
    date: new Date(2021, 0, 15),
    visible: true,
  },
  {
    id: "3",
    title: "Toilet Paper",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    visible: true,
  },
];

const App = () => {
  const [expensesByUser, setExpensesByUser] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(expense.date);
    console.log(expense.amount);
    setExpensesByUser([...DUMMY_EXPENSES, expense]);
  };

  const onFilterChange = (year) => {
    setExpensesByUser(() =>
      expensesByUser.map((expense) => {
        return { ...expense, visible: expense.date.getFullYear() == year };
      })
    );
  };

  return (
    <div className="App">
      <h2>Hummmmm</h2>
      <p>This is also visible!</p>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseFilter years={years} onFilterChange={onFilterChange} />
      <ExpenseListItems items={expensesByUser} />
    </div>
  );
};

export default App;
