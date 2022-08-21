import ExpenseItem from "./ExpenseItem";

function ItemsList(props){
  return(
    <div>
    <ExpenseItem id={props.expenses[0].id} title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
    <ExpenseItem id={props.expenses[1].id} title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
    <ExpenseItem id={props.expenses[2].id} title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
    <ExpenseItem id={props.expenses[3].id} title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></ExpenseItem>
    </div>
  )
}

export default ItemsList;