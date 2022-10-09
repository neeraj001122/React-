import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props) => 
{
    return(
         <div className='expense-item'>
         <ExpenseDate date={props.date}></ExpenseDate>
         <ExpenseDetails amount={props.amount} title={props.title} location={props.location} ></ExpenseDetails>
        </div>
    );          
}

export default ExpenseItem;