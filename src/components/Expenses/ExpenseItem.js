import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props) => 
{
    const clickHandler = () => {
        let items = document.getElementById('yo!')
        let div = document.getElementById('div')
        div.remove(div)
        console.log(items)
    };
    return(
         <div className='expense-item' id='div'>
         <ExpenseDate date={props.date}></ExpenseDate>
         <ExpenseDetails amount={props.amount} title={props.title} location={props.location} ></ExpenseDetails>
         <button onClick={clickHandler}>Delete</button>
        </div>
    );          
}

export default ExpenseItem;