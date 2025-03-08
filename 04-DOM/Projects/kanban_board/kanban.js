//  Gey all btns

const todo_add_btn = document.getElementById('todo-add-btn');
// const continue_add_btn = document.getElementById('continue-add-btn')
// const done_add_btn = document.getElementById('done-add-btn')
// const submit_add_btn = document.getElementById('"submit-add-btn')


// get sort button
const sort_btn = document.getElementsByClassName('sort')[0];
const filter_btn = document.getElementsByClassName('filter')[0]
const customize_btn = document.getElementsByClassName('customize')[0]


const sort_tasks = () => {

}

const filter_task = () => {

}

const customize_task = () => {

}

todo_add_btn.addEventListener('click', () => addNewTodoTask())

const todo_new_list = []
// const continue_new_list = []
// const done_new_list = []
// const submit_new_list = []

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