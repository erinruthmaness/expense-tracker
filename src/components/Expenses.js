import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            date={expense.date}
            amount={expense.amount}
            title={expense.title}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
