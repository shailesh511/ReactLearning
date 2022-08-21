import "../Styling/ExpenseDate.css"

function ExpenseDate(props){
    
    const day=props.date.getDate();
    const month=props.date.getMonth();
    const year=props.date.getFullYear();
    
    const monthNames=["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
     return(
        <div className="expense-date">
             <div className="expense-date__day">{day}</div>
             <div className="expense-date__month">{monthNames[month]}</div>
             <div className="expense-date__year">{year}</div>
        </div>
        
     )
}

export default ExpenseDate