import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">No expenses for this year</h2>
    );
  }

  const items = props.items.map((item) => {
    return (
      <ExpenseItem
        date={item.date}
        amount={item.amount}
        title={item.title}
        key={item.id}
        visible={true}
      />
    );
  });

  return <ul className="expenses-list">{items}</ul>;
};

export default ExpenseList;
