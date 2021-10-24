import {useState} from 'react'
import './Expenses.css'
import Card from '../UI/Card.js'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = props => {
  // console.log('Props in Expenses.js')
  // console.log(props)
  const[year, setYear] = useState('2021')

  const yearChangeHandler = (year) => {
    console.log("Lifting the state up - " + year)
    setYear(year)
  }

  // console.log('Year- ' + year)
  // console.log('Props - ')
  // console.log(props.data[0].name)
  // console.log(props.data[0].date.getFullYear())

  const filteredExpenses = props.data.filter(aRandomParameterForFilter => {
    console.log(aRandomParameterForFilter)
    // console.log(aRandomParameterForFilter.date.getFullYear().toString())
    return aRandomParameterForFilter.date.getFullYear().toString() === year
  })

  console.log('Filtered expenses- ');
  console.log(filteredExpenses);

  return (
    <Card className="expenses">
        <ExpensesFilter onYearChange={yearChangeHandler}
                        defaultYear={year}
        />
        <ExpensesChart filteredExpenseData={filteredExpenses}/>
        <ExpensesList data={filteredExpenses} />

        {/*{props.data.map(aRandomParameterForMap => (*/}
        {/*{filteredExpenses.data.map(aRandomParameterForMap => (*/}

        {/*
          <ExpenseItem name = {props.data[0].name}
                      price = {props.data[0].price}
                      date = {props.data[0].date}
          />
          <ExpenseItem name = {props.data[1].name}
                      price = {props.data[1].price}
                      date = {props.data[1].date}
          />
          <ExpenseItem name = {props.data[2].name}
                      price = {props.data[2].price}
                      date = {props.data[2].date}
          />
          <ExpenseItem name = {props.data[3].name}
                      price = {props.data[3].price}
                      date = {props.data[3].date}
          />
          */}
    </Card>
  )
}

export default Expenses;
