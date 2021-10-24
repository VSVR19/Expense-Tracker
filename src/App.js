import {useState} from 'react'
import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const initialExpenses = [
  { id: 1, name: 'Destination Moon.', price: 14.11, date: new Date(2021, 9, 2) },
  { id: 2, name: 'Tintin in Tibet.', price: 13.39, date: new Date(2020, 7, 15) },
  { id: 3,  name: 'Cigars of the Pharaoh.', price: 11.39, date: new Date(2021, 6, 7) },
  { id: 4,  name: 'The Blue Lotus.', price: 13.39, date: new Date(2020, 8, 4) }
]

const App = () => {
  const[expenses, setExpenses] = useState(initialExpenses)

  const addExpenseHandler = latestExpense => {
    console.log('Latest expense- ')
    console.log(latestExpense)
    setExpenses(prevState => [latestExpense, ...expenses])
  }

  return (
    <div>
        <NewExpense addExpense={addExpenseHandler}/>
        {/*<Expenses data={initialExpenses} />*/}
        <Expenses data={expenses}/>
        {/*
          <ExpenseItem name = {expenses[0].name}
                      price = {expenses[0].price}
                      date = {expenses[0].date}
          />
          <ExpenseItem name = {expenses[1].name}
                      price = {expenses[1].price}
                      date = {expenses[1].date}
          />
          <ExpenseItem name = {expenses[2].name}
                      price = {expenses[2].price}
                      date = {expenses[2].date}
          />
          <ExpenseItem name = {expenses[3].name}
                      price = {expenses[3].price}
                      date = {expenses[3].date}
          />
          */}
    </div>
  );
}

export default App;
