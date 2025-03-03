const add_btn = document.getElementById('task_btn')
const todoBoard = document.getElementById('todo-board')
const all_boards = document.querySelectorAll('.board')
const all_items = document.querySelectorAll('.item')

add_btn.addEventListener('click', () => {
  const input = prompt('What is the task ?')

  if(!input) return 
  const task_card = document.createElement('p')
  task_card.classList.add('item')
  task_card.innerText = input
  todoBoard.appendChild(task_card)
  
})

all_items.forEach(item => {
  item.addEventListener('dragstart', () => {

  })
})

all_boards.forEach(board => {
  board.addEventListener('dragover', () => {
    const flyingElement = document.querySelector('.flying')
    console.log(`${board} ke upar kuchh to gaya`);

    board.appendChild(flyingElement)
  })
})