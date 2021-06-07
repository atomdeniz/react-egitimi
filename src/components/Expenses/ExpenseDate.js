import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  var month = props.date.toLocaleString("default", { month: "long" });
  var day = props.date.toLocaleString("default", { day: "2-digit" });
  var year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
