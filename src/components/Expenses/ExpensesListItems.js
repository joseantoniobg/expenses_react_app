import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpenseListItems.css";
import Card from "../UI/Card";

const ExpenseListItems = (props) => {
  const items = props.items.map((item) => {
    return (
      <ExpenseItem
        date={item.date}
        amount={item.amount}
        title={item.title}
        key={item.id}
      />
    );
  });

  return <Card className="expense-list">{items}</Card>;
};

export default ExpenseListItems;
