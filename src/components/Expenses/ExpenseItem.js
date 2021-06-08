import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem çalıştırıldı by React");

  const clickHandler = () => {
    setTitle("Güncellendi!");
    console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}TL</div>
          <button onClick={clickHandler}>Tıkla</button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
