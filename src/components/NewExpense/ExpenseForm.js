import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //   const titleChangeHandler = () => {
  //     console.log("title changed");
  //   };

  const [enteredTitle, setenteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2022-12-31"></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="sumbit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
