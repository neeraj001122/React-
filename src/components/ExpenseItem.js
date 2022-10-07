import './ExpenseItem.css'

function ExpenseItem() 
{
    var food  = <div className='expense-item'>
            <div>Expense Item</div>
            <div className='expense-item__description'><h2>Food</h2>
            <div className='expense-item__price'>10</div>
            </div>
        </div>

    var petrol  = <div className='expense-item'>
            <div>Expense Item</div>
            <div className='expense-item__description'><h2>petrol</h2>
            <div className='expense-item__price'>100</div>
            </div>
        </div> 
        
        var movie  = <div className='expense-item'>
        <div>Expense Item</div>
        <div className='expense-item__description'><h2>Movie</h2>
        <div className='expense-item__price'>200</div>
        </div>
    </div>    
   var arr = [food,petrol,movie]
   return arr       
}

export default ExpenseItem;