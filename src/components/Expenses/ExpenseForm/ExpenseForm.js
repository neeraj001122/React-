import NewExpenses from "./NewExpenses";
import './ExpenseForm.css'
const  ExpenseForm = (props) => {
  return (
    <div className="new-expense">
        <NewExpenses></NewExpenses>
    </div>
  );
};

export default ExpenseForm;