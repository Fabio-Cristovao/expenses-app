import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { Card } from "../UI/Card";
import './Expenses.css';
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2019');

  const handleSelectedYear = (year) => {
    setSelectedYear(year);
    console.log(selectedYear);
    console.log(filteredData);
  }

  const filteredData = props.data.filter(expense => expense.date.getFullYear().toString() === selectedYear)

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter defaultYear={selectedYear}
          onSelectingYear={handleSelectedYear} />
        <ExpensesChart expenses={filteredData} />
        <ExpensesList expenses={filteredData} />
      </Card>
    </div>
  )
}

export default Expenses;