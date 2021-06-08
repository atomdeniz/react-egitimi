import React, { useState } from "react";

import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2021");

  const filterChangeHandler = (selectedyear) => {
    setfilteredYear(selectedyear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  {
    /* 3.Örnek */
  }
  // let expensesContent = <p>No expenses found!</p>;

  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //       key={expense.id}
  //     ></ExpenseItem>
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>

        <ExpensesList items={filteredExpenses}></ExpensesList>

        {/* 2.Örnek */}
        {/* {filteredExpenses.length === 0 && <p>No expenses found!</p>}

        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            ></ExpenseItem>
          ))} */}

        {/* 1.Örnek */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found!</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            ></ExpenseItem>
          ))
        )} */}
      </Card>
    </div>
  );
};

export default Expenses;
