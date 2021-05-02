import Card from './Card';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            date={expense.date}
            amount={expense.amount}
            title={expense.title}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
