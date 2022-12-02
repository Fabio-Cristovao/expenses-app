import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {

  const [userTitle, setUserTitle] = useState('');
  const [userAmount, setUserAmount] = useState('');
  const [userDate, setUserDate] = useState('');

  const handleOnCloseForm = () => {
    props.onCloseForm(false);
    console.log("close form function executed");

  }

  const titleChangeHandler = (e) => {
    setUserTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setUserAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setUserDate(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.onCloseForm(false);

    const newExpenseData = {
      title: userTitle,
      amount: userAmount,
      date: new Date(userDate),
    }
    props.onSaveExpenseData(newExpenseData);
    setUserTitle('');
    setUserAmount('');
    setUserDate('');
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} value={userTitle} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} value={userAmount} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min="2019-01-01" max="2023-12-31" step="0.01" onChange={dateChangeHandler} value={userDate} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="submit">Add New Expense</button>
        <button onClick={handleOnCloseForm} type="button">Cancel</button>
      </div>
    </form>
  )
}

export default ExpenseForm;