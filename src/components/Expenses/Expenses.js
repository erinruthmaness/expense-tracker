import { useState } from "react";
import Card from "../UI/Card";
import Filter from "./Filter/Filter";
import ExpensesChart from './Chart/ExpensesChart';
import ExpensesList from "./ExpensesList/ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("2021");
  const displayExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(year)
  );

  const handleFilter = (newYear) => {
    setYear(newYear);
  };

  return (
    <Card className="expenses">
      <Filter selected={year} onFilter={handleFilter} />
      <ExpensesChart expenses={displayExpenses} />
      <ExpensesList items={displayExpenses} />
    </Card>
  );
};

export default Expenses;
