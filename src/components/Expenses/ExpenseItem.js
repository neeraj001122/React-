import React, {useState} from 'react'

import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props) => 
{
    let [old, setAmount] = useState(props.amount);
    const update = () => {
        setAmount('$100')
        console.log('clicked')
    };
    const clickHandler = () => {
        let items = document.getElementById('yo!')
        let div = document.getElementById('div')
        div.remove(div)
        console.log(items)
    };
    return(
         <div className='expense-item' id='div'>
         <ExpenseDate date={props.date}></ExpenseDate>
         <ExpenseDetails amount={old} title={props.title} location={props.location} ></ExpenseDetails>
         <button className='expense-button' onClick={clickHandler}>Delete</button>
         <button className='expense-button' onClick={update}>Update</button>
        </div>
    );          
}

export default ExpenseItem;