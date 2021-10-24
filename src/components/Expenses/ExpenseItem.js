import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'

const ExpenseItem = props => {
  {/*const [name, setName] = useState(props.name)
  const buttonClickHandler = () => setName('Updated!')*/}

  // const month = props.date.toLocaleString('en-US', { month: 'long' })
  // const day = props.date.toLocaleString('en-US', {day: '2-digit'})
  // const year = props.date.getFullYear()

  return (
    <li>
      <Card className='expense-item'>
        <div>
          <ExpenseDate
            date = {props.date}
          />
        </div>
        <div className='expense-item__description'>
          <h2>{props.name}</h2>
          {/*<h2>{name}</h2>*/}
          <div className='expense-item__price'>{props.price}</div>
        </div>
        {/*<button onClick = {buttonClickHandler}>Cool button.</button>*/}
      </Card>
    </li>
  )
}

export default ExpenseItem
