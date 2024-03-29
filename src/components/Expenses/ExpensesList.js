import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = props => {
  if (props.data.length === 0)
    return <p className='expenses-list__fallback'>No expenses found.</p>

  return (
    <ul className='expenses-list'>
    {
      props.data.map(aRandomParameterForMap => (
          <ExpenseItem
            key = {aRandomParameterForMap.id}
            name = {aRandomParameterForMap.name}
            price = {aRandomParameterForMap.price}
            date = {aRandomParameterForMap.date}
          />
        ))
    }
    </ul>
  )
}

export default ExpensesList
