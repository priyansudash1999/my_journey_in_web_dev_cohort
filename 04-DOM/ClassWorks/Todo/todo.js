let todos_list = document.getElementsByClassName('todos-list')[0]
let input = document.getElementsByClassName('todos')[0]
let todo_time_from = document.getElementsByClassName('todo-time-from')[0]
let todo_time_to = document.getElementsByClassName('todo-time-to')[0]
let btn = document.getElementsByClassName('add-btn')[0]


btn.addEventListener('click', () => {
    let time_from = todo_time_from.value
    let time_to = todo_time_to.value 

    if(time_from !== '' && time_to !== '' && input.value !== ''){
      let format_time_from = formatTime(time_from)
      let format_time_to = formatTime(time_to)

      let li = document.createElement('li')
      li.classList.add('todo-item')
      li.innerText = `${format_time_from} - ${format_time_to} => ${input.value}`
      

      let btn_container = document.createElement('div') 
      btn_container.style.marginLeft = 'auto'

      let edit_btn = document.createElement('button')
      edit_btn.innerText = '✏️'
      edit_btn.classList.add('li-btn')
      edit_btn.addEventListener('click', () => {
        // let new_value = 
      })

      let delete_btn = document.createElement('button')
      delete_btn.innerText = '❌'
      delete_btn.classList.add('li-btn')
      delete_btn.addEventListener('click', () => {
        li.remove();
      })

      let complete_button = document.createElement('button')
      complete_button.innerText = '✔'
      complete_button.classList.add('li-btn')

      complete_button.addEventListener('click', () => {
        if(complete_button.innerText === '✔'){ 
          li.style.textDecoration = 'line-through'
          li.style.textDecorationColor = '#e92222'
          complete_button.innerText = 'x'
        }
        else{
          li.style.textDecoration = 'none'
          // li.style.textDecorationColor = '#e92222'
          complete_button.innerText = '✔'
        }
      })

      btn_container.appendChild(edit_btn)
      btn_container.appendChild(delete_btn)
      btn_container.appendChild(complete_button)

      li.appendChild(btn_container) 
      todos_list.appendChild(li)

      input.value = ''
      todo_time_from.value = ''
      todo_time_to.value = ''
    }
  }
)


const formatTime = (time) => {
  let [date, time_part] = time.split('T')
  let [hour, minute] = time_part.split(':')
  hour = parseInt(hour, 10)
  minute = parseInt(minute, 10)

  let am_or_pm = hour >= 12 ? 'PM' :'AM'
  hour = hour % 12 || 12
  let formattedHour = hour.toString().padStart(2, '0');
  let formattedMinute = minute.toString().padStart(2, '0');
  return `${formattedHour}:${formattedMinute} ${am_or_pm}`
}