import "./NewExpenses.css";
const NewExpenses = (props) => {
  const data = (event) => {
    console.log(event.target.value)
  };
  return (
    <form>
      <div className="new-Expense__controls">
        <div className="new-expense__control">
          <label>Title:- </label>
          <input type="text"  onChange={data}/>
        </div>
        <div className="new-expense__control">
          <label>Amount:- </label>
          <input type="number" onChange={data}/>
        </div>
        <div className="new-expense__control">
          <label>Date:- </label>
          <input type="date" onChange={data}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default NewExpenses;
