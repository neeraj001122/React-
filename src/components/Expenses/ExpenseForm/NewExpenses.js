import React, {useState} from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import "./NewExpenses.css";
const NewExpenses = (props) => {
  const [oldTitle, newTitle] = useState('')
  const [oldAmount, newAmount] = useState('')
  const [oldDAte, newDate] = useState('')

  const TitalChange = (event) => {
    console.log(event.target.value)
   newTitle(event.target.value)
  };

  
  const AmountChange = (event) => {
   newAmount(event.target.value)
  };

  
   const DateChange = (event) => {
   newDate(event.target.value)
  };

  return (
    <form>
      <div className="new-Expense__controls">
        <div className="new-expense__control">
          <label>Title:- </label>
          <input type="text"  onChange={TitalChange}/>
        </div>
        <div className="new-expense__control">
          <label>Amount:- </label>
          <input type="number" onChange={AmountChange}/>
        </div>
        <div className="new-expense__control">
          <label>Date:- </label>
          <input type="date" onChange={DateChange}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default NewExpenses;
