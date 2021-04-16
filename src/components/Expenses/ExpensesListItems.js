import React from "react";

import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

import "./ExpenseListItems.css";
import Card from "../UI/Card";

const ExpenseListItems = (props) => {
  const filteredItems = props.items.filter((expense) => expense.visible);

  return (
    <Card className="expense-list">
      <ExpensesChart expenses={filteredItems} />
      <ExpenseList items={filteredItems} />
    </Card>
  );
};

export default ExpenseListItems;
