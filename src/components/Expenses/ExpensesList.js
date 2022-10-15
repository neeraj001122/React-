import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'
const ExpensesList = (props) => {  
if(props.item.length===0)
{
    return <h2 className='expenses-list__fallback'>Found no Expenses.</h2>
}
return (
    <ul className='expenses-list'>
    {props.item.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
      location={item.location}
    ></ExpenseItem>
  ))}
    </ul>
)
};

export default ExpensesList;