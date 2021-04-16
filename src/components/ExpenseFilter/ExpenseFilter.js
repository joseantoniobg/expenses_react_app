import React from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterChangeHandler}>
          {props.years.map((year) => {
            return (
              <option key={year.key} value={year.year}>
                {year.year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
