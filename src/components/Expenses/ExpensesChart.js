// https://stackoverflow.com/questions/29285897/what-is-the-difference-between-for-in-and-for-of-statements

import Chart from '../Chart/Chart'

const ExpensesChart = props => {
  const chartDataPoints = [
    {label: 'Jan', value: 0},
    {label: 'Feb', value: 0},
    {label: 'Mar', value: 0},
    {label: 'Apr', value: 0},
    {label: 'May', value: 0},
    {label: 'Jun', value: 0},
    {label: 'Jul', value: 0},
    {label: 'Aug', value: 0},
    {label: 'Sep', value: 0},
    {label: 'Oct', value: 0},
    {label: 'Nov', value: 0},
    {label: 'Dec', value: 0}
  ]

  // for (const expense in props.filteredExpenseData) {
  for (const expense of props.filteredExpenseData) {
    const expenseMonth = expense.date.getMonth()
    chartDataPoints[expenseMonth].value += expense.price
  }
  return <Chart dataPoints={chartDataPoints}/>
}

export default ExpensesChart
