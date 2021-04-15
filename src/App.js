import React, { useState } from "react";

import "./App.css";
import ExpenseListItems from "./components/Expenses/ExpensesListItems";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expences = [
    {
      id: "1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 20),
    },
    {
      id: "2",
      title: "New TV",
      amount: 799.99,
      date: new Date(2021, 0, 15),
    },
    {
      id: "3",
      title: "Toilet Paper",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In app js!");
    console.log(expense);
  };

  const [filterYear, setFilterYear] = useState("2022");

  const onFilterChange = (year) => {
    setFilterYear(year);
  };

  return (
    <div className="App">
      <h2>Hummmmm</h2>
      <p>This is also visible!</p>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseFilter onFilterChange={onFilterChange} />
      <h1>{filterYear}</h1>
      <ExpenseListItems items={expences} />
    </div>
  );
};

export default App;
