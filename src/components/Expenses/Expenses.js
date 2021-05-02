import { useState } from 'react';
import Card from "../UI/Card";
import Filter from "./Filter/Filter";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  
  const [year, setYear] = useState('2021');

  const handleFilter = (year) => {
    setYear(year);
  }

  return (
    <Card className="expenses">
      <Filter selected={year} onFilter={handleFilter} />
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            amount={expense.amount}
            title={expense.title}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
