// get all boards
const todo_board = document.getElementById('todo-board')
const continue_board = document.getElementById('continue-board')
const done_board = document.getElementById('done-board')
const submit_board = document.getElementById('submitted-board')


const todo_add_btn = document.getElementById('todo-add-btn');

// get sort button
const todo_sort_btn = document.getElementsByClassName('sort')[0];
const filter_btn = document.getElementsByClassName('filter')[0]
const customize_btn = document.getElementsByClassName('customize')[0]


// get remaining sort buttons
const continue_sort_btn = document.getElementById('continue-sort-btn')
const done_sort_button = document.getElementById('done-sort-btn')
const submit_sort_button = document.getElementById('submit-sort-btn')




todo_sort_btn.addEventListener('click', () => sort_tasks(todo_board))
continue_sort_btn.addEventListener('click', () => sort_tasks(continue_board))
done_sort_button.addEventListener('click', () => sort_tasks(done_board))
submit_sort_button.addEventListener('click', () => sort_tasks(submit_board))


customize_btn.addEventListener('click', () => customize_task())

const sort_tasks = (board) => {
  let tasks = Array.from(board.getElementsByClassName('task'))

  tasks.sort((a, b)=> {
    let dateA = new Date(parseDate(a.querySelector('.date').innerText));
    let dateB = new Date(parseDate(b.querySelector('.date').innerText));
    return dateA - dateB;
  }) 
  tasks.forEach((task) => {
    board.appendChild(task)
  });
}

const parseDate = (date) => {
  let parts = date.match(/(\d{1,2})[a-zA-Z]*\s(\w+)/);
  if (!parts) return new Date(); 

  let day = parseInt(parts[1]);
  let month = getMonthNumber(parts[2]);

  let currentYear = new Date().getFullYear();
  return new Date(currentYear, month, day);
}

function getMonthNumber(monthName) {
  const months = ["january", "february", "march", "april", "may", "june", 
                  "july", "august", "september", "october", "november", "december"];
  return months.indexOf(monthName.toLowerCase());
}



const filter_task = () => {

}

const customize_task = () => {
  alert('Available very soon...')
}

todo_add_btn.addEventListener('click', () => addNewTodoTask())

const todo_new_list = []

const addNewTodoTask = () => {
  function getRequiredInput(message) {
    let input;
    while (!input) {
        input = prompt(message)?.trim();
    }
    return input;
  }

  const todo_name = getRequiredInput('Enter title:');
  const todo_priority = getRequiredInput('Enter Priority (high/low/medium):');
  const todo_date = getRequiredInput('Enter Date :');
  const todo_time = getRequiredInput('Enter time in hours:');
  
  todo_new_list.push({todo_name, todo_priority, todo_date, todo_time});

  const todo_board = document.getElementById('todo-board'); 

  const top_section = document.createElement('div');
  top_section.classList.add('top-section');

  const image = document.createElement('img');
  image.src = './images/checked.png';
  image.alt = 'check marked';
  image.classList.add('task-icons');

  const para = document.createElement('p');
  para.innerText = todo_name;

  top_section.appendChild(image);
  top_section.appendChild(para);

  const middle_section = document.createElement('div');
  middle_section.classList.add('middle-section');

  const priority_para = document.createElement('p');
  priority_para.innerText = todo_priority;
  priority_para.classList.add(todo_priority.toLowerCase());
  middle_section.appendChild(priority_para);

  const bottom_section = document.createElement('div');
  bottom_section.classList.add('bottom-section');

  const left_part = document.createElement('div');
  left_part.classList.add('left-part');

  const img = document.createElement('img');
  img.src = './images/man (1).png';
  img.alt = 'user';
  img.classList.add('task-users');

  const left_para = document.createElement('p');
  left_para.innerText = todo_date;
  left_para.classList.add('date');

  left_part.appendChild(img);
  left_part.appendChild(left_para);

  const right_part = document.createElement('div');
  right_part.classList.add('right-part');

  const right_para = document.createElement('p');
  right_para.innerText = `${todo_time} hr${todo_time !== '1' ? 's' : ''}`;

  right_part.appendChild(right_para);
  bottom_section.appendChild(left_part);
  bottom_section.appendChild(right_part);

  // **Create Task Div**
  const task = document.createElement('div');
  task.classList.add('task');
  task.draggable = true;
  task.id = `task-${Date.now()}`; // Unique ID

  task.appendChild(top_section);
  task.appendChild(middle_section);
  task.appendChild(bottom_section);

  task.addEventListener('dragstart', (e) => drag(e));

  todo_board.appendChild(task);
  getCountOfTasks();
};

const addNewContinueTask = () => {

}

const addNewDoneTask = () => {

}

const addNewSubmitTask = () => {

}



const dropped = (e) => {
  e.preventDefault()
  let tast_id = e.dataTransfer.getData('text')
  console.log(tast_id);
  if (!e.target.classList.contains('col')) {
    alert('Can not be nested !!');
    return;
  }
  e.target.appendChild(document.getElementById(tast_id))
  getCountOfTasks()
}

const canDrop = (e) => {
  e.preventDefault()
}

function drag(e){
  e.dataTransfer.setData('text', e.target.id)
  getCountOfTasks()
}

function getCountOfTasks(){
  const todoHeader = document.getElementById('todo')
  const continueHeader = document.getElementById('continue')
  const doneHeader = document.getElementById('done')
  const submittedHeader = document.getElementById('submitted')

  const todo_board = document.getElementById('todo-board')
  const continue_board = document.getElementById('continue-board')
  const done_board = document.getElementById('done-board')
  const submitted_board = document.getElementById('submitted-board')

  updateHeader(todoHeader, todo_board)
  updateHeader(continueHeader, continue_board)
  updateHeader(doneHeader, done_board)
  updateHeader(submittedHeader, submitted_board)
}


function updateHeader(header, column){
  header.innerText = `${header.innerText.split(" ")[0]} [${column.children.length}]`
}

getCountOfTasks()