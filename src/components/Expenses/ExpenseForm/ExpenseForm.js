import NewExpenses from "./NewExpenses";
import './ExpenseForm.css'
const  ExpenseForm = (props) => {
  const saveExpenseDataHandler = data => {
     let obj={
        ...data,
        id:Math.random().toString()
      }
      props.onAddExpense(obj)
  };
  return (
    <div className="new-expense">
        <NewExpenses onSaveExpenseData={saveExpenseDataHandler}></NewExpenses>
    </div>
  );
};

export default ExpenseForm;