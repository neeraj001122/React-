import React, {useState} from 'react';
import './Expenses.css'
 import ExpenseItem from './components/Expenses/ExpenseItem';
  import ExpenseForm from './components/Expenses/ExpenseForm/ExpenseForm';
  import ExpensesFilter from './components/Expenses/ExpenseFilter';
  const Dummy_Array = [   
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Tajmahal",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "Japan",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Dubai",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "America",
    },
  ];
function App() {
 const [filterdYear, setFilterdYear] = useState('2020')
 const [expenses, setExpenses]=useState(Dummy_Array)
  const addExpenseHandler = (expense) => {
    setExpenses(expenses.unshift(expense))
    console.log(expense);
  };

  const filterchangehandler = (selectedyear) => {
     setFilterdYear(selectedyear) 
  };
   
  const filteredExpenses = expenses.filter(items => {
    return items.date.getFullYear().toString() === filterdYear;
  })

  return (
    <div>
      <ExpenseForm selected={filterdYear} onAddExpense={addExpenseHandler} ></ExpenseForm>
      <ExpensesFilter onChangefilter={filterchangehandler}></ExpensesFilter>
    <div>
      {filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
          location={item.location}
        ></ExpenseItem>
      ))}
    </div>
    </div>
  );
}

export default App;
