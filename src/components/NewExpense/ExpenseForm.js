// https://stackoverflow.com/questions/28770415/ecmascript-6-arrow-function-that-returns-an-object

import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredPrice, setEnteredPrice] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  // const [userInput, setUserInput] =
  // useState({
  //   enteredName: '',
  //   enteredPrice: '',
  //   enteredDate: ''
  // })

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredName: event.target.value
    // })

    // setUserInput((prevState) => ({...prevState, enteredName: event.target.value}))
    // console.log('Entered name from state '+ enteredName);
    // console.log('Entered name from state '+ userInput.enteredName);
    // console.log('Entered name from JS '+ event.target.value);
    // console.log('Entered name from state '+ enteredName);
  }

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredPrice: event.target.value
    // })
    // setUserInput((prevState) => ({...prevState, enteredPrice: event.target.value}))
    // console.log('Entered price from state '+ enteredPrice);
    // console.log('Entered price from JS '+ event.target.value);
    // console.log('Entered price from state '+ enteredPrice);
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })
    // setUserInput((prevState) => ({...prevState, enteredDate: event.target.value}))
    // console.log('Entered date from state '+ enteredDate);
    // console.log('Entered date from JS '+ event.target.value);
    // console.log('Entered date from state '+ enteredDate);
  }

  const formSubmitHandler = event => {
    event.preventDefault()

    const savedExpense = {
      name: enteredName,
      price: +enteredPrice,
      date: new Date(enteredDate + 'T00:00:00')
    }
    console.log(savedExpense)
    props.onSaveExpense(savedExpense)
    setEnteredName('')
    setEnteredPrice('')
    setEnteredDate('')
  }

  return (
    <form onSubmit = {formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Name</label>
          <input type='text'
                  value={enteredName}
                  onChange={nameChangeHandler}
                  />
        </div>
        <div className='new-expense__control'>
          <label>Price</label>
          <input type='number'
                  min='0'
                  value={enteredPrice}
                  onChange={priceChangeHandler}
                  />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date'
                  min='2009-06-17'
                  max='2023-12-31'
                  value={enteredDate}
                  onChange = {dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button
          type='button'
          onClick = {props.onCancel}>
          Cancel
        </button>
        <button type='submit'>Save</button>
      </div>
    </form>
  )
}

export default ExpenseForm
