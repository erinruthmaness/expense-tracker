import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const newDataHandler = (newData) => {
        const newExpense = {
            ...newData,
            id: Math.random().toString()
        };
        props.onAdd(newExpense);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onAddNew={newDataHandler} />
        </div>
    )
};

export default NewExpense;