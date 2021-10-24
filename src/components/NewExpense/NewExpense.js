// https://github.com/EQuimper/CodeChallenge/blob/master/javascript/FreeCodeCamps/Basic%20JavaScript/Generate%20Random%20Whole%20Numbers%20with%20JavaScript.md

import { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm.js'

const NewExpense = props => {
  const[showExpenseForm, setShowExpenseForm] = useState(false)

  const saveExpenseHandler = (savedExpense) => {
    const expenseData = {
      ...savedExpense,
      id: Math.floor(Math.random() * 10).toString()
    }
    props.addExpense(expenseData)
    setShowExpenseForm(false)
  }

  const showExpenseHandler = () => {
    setShowExpenseForm(true)
    console.log('Show the form!' + showExpenseForm)
  }

  const hideExpenseHandler = () => {
    setShowExpenseForm(false)
  }

  if (showExpenseForm)
    return (
      <div className='new-expense'>
        <ExpenseForm onSaveExpense={saveExpenseHandler}
                      onCancel = {hideExpenseHandler}
        />
      </div>
    )

  return (
    <div className='new-expense'>
      {/*<ExpenseForm onSaveExpense={saveExpenseHandler}/>*/}
      <button onClick = {showExpenseHandler}>Add new expense</button>
    </div>
  )
}

export default NewExpense
