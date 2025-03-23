const result = document.getElementsByClassName('result')[0]
const number1 = document.getElementById('first')
const number2 = document.getElementById('second')

const add = document.getElementsByClassName('add')[0]
const substract = document.getElementsByClassName('substract')[0]
const multiply = document.getElementsByClassName('multiply')[0]
const divide = document.getElementsByClassName('divide')[0]

add.addEventListener('click', (number1, number2) => addingNumber(number1, number2))
substract.addEventListener('click', (number1, number2) => substractNumber(number1, number2))
multiply.addEventListener('click', (number1, number2) => multiplyNumbers(number1, number2))
divide.addEventListener('click', (number1, number2) => divideNumbers(number1, number2))

function addingNumber(num1, num2){
  result.textContent = `Result: ${Number(num1) + Number(num2)}`

  console.log(num1.value)
}