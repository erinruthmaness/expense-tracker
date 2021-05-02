import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const changeHandler = (event) => {
    switch (event.target.id) {
      case "new-expense-title":
        setNewTitle(event.target.value);
        break;
      case "new-expense-amount":
        setNewAmount(event.target.value);
        break;
      case "new-expense-date":
        setNewDate(event.target.value);
        break;
      default:
        console.log("switch case error:");
        console.log(event.target.id);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: newTitle,
      amount: +newAmount,
      date: new Date(newDate),
    };
    props.onAddNew(expenseData);

    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            id="new-expense-title"
            type="text"
            value={newTitle}
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            id="new-expense-amount"
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeHandler}
            value={newAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            id="new-expense-date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={changeHandler}
            value={newDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.toggleForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
