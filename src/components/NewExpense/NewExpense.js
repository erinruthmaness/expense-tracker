import { useState } from "react";
import ShowFormButton from "./ShowForm/ShowForm";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const displayForm = () => {
    setShowForm(true);
  };
  const hideForm = () => {
    setShowForm(false);
  };

  const newDataHandler = (newData) => {
    const newExpense = {
      ...newData,
      id: Math.random().toString(),
    };
    props.onAdd(newExpense);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm onAddNew={newDataHandler} toggleForm={hideForm} />
      ) : (
        <ShowFormButton toggleForm={displayForm} />
      )}
    </div>
  );
};

export default NewExpense;
