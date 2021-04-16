import React from "react";

import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("pt-Br", {
    month: "long",
    timeZone: "UTC",
  });
  const day = props.date.toLocaleString("pt-Br", {
    day: "2-digit",
    timeZone: "UTC",
  });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
