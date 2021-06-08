import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function custom_sort(a, b) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  if (props.items.length > 0) {
    return (
      <ul className="expenses-list">
        {props.items.sort(custom_sort).map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          ></ExpenseItem>
        ))}
      </ul>
    );
  }
};

export default ExpensesList;
