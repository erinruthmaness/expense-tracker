import ExpenseItem from "./ExpenseItem/ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  } else {
    return (
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            amount={expense.amount}
            title={expense.title}
          />
        ))}
      </ul>
    );
  }
};

export default ExpensesList;
