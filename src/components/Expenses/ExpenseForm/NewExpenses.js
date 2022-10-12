import React, {useState} from "react";
import "./NewExpenses.css";
const NewExpenses = (props) => {
  let [oldTitle, newTitle] = useState('')
  const [oldAmount, newAmount] = useState('')
  const [oldDAte, newDate] = useState('')

  const TitalChange = (event) => {
   newTitle(event.target.value)
  };

  
  const AmountChange = (event) => {
   newAmount(event.target.value)
  };

  
   const DateChange = (event) => {
   newDate(event.target.value)
  };

  const GetDetails = (event) => {
    event.preventDefault();
    var obj = {
      title: oldTitle,
      amount: oldAmount,
      date: new Date(oldDAte),
    }
    props.onSaveExpenseData(obj)
    newTitle('');
    newAmount('');
    newDate('');
    
   };

  return (
    <form onSubmit={GetDetails}>
      <div className="new-Expense__controls">
        <div className="new-expense__control">
          <label>Title:- </label>
          <input type="text" value={oldTitle} onChange={TitalChange}/>
        </div>
        <div className="new-expense__control">
          <label>Amount:- </label>
          <input type="number" value={oldAmount} onChange={AmountChange}/>
        </div>
        <div className="new-expense__control">
          <label>Date:- </label>
          <input type="date" value={oldDAte} onChange={DateChange}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default NewExpenses;
