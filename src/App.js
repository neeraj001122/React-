import './Expenses.css'
 import ExpenseItem from './components/Expenses/ExpenseItem';
  import ExpenseForm from './components/Expenses/ExpenseForm/ExpenseForm';
function App() {
  const expenses = [   
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
  
  const addExpenseHandler = (expense) => {
    console.log(expense)
  }

  return (
    <div>
      <ExpenseForm onAddExpense={addExpenseHandler} ></ExpenseForm>
    <div>
      {expenses.map((item) => (
        <ExpenseItem
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
