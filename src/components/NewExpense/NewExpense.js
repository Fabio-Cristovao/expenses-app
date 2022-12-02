import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(!isOpen);
  }

  const handleCloseForm = (boolean) => {
    setIsOpen(boolean);
  };

  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
      {isOpen && <ExpenseForm onCloseForm={handleCloseForm} onSaveExpenseData={handleSaveExpenseData} />}
      {!isOpen && <button onClick={handleOpenForm}>Add a new expense</button>}

    </div>
  )
}

export default NewExpense;