const task_input = document.getElementById('taskInput')
const add_btn= document.getElementById('addButton')
const taskList = document.getElementById('taskList')
const totalTasks = document.getElementById('totalTasks')
const completedTasks = document.getElementById('completedTasks')

const no_tasks = document.getElementsByClassName('empty-list')[0]

let tasks = 0
let complete_task = 0

add_btn.addEventListener('click', () => {
  if (task_input.value === '') {
    alert('Give some input please');
    return;
  } 
  
  no_tasks.remove(); 

  const li = document.createElement('li');
  li.classList.add('task-item');

  const toggle_btn = document.createElement('div');
  toggle_btn.classList.add('complete-checkbox');

  const task_text = document.createElement('span');  
  task_text.innerText = task_input.value;

  const delete_btn = document.createElement('button');
  delete_btn.innerText = 'X';
  delete_btn.classList.add('delete-button');

  delete_btn.addEventListener('click', () => {
    li.remove();
    tasks--;
    totalTasks.innerText = `Total tasks: ${tasks}`;

    if (tasks === 0) {
      taskList.appendChild(no_tasks);
      complete_task = 0
      completedTasks.innerText = `Completed: ${complete_task}`;
    }
  });

  toggle_btn.addEventListener('click', () => {
    if (toggle_btn.innerText === '') {
      task_text.classList.add('completed-text'); 
      toggle_btn.innerText = '✔';
      complete_task++;
    } else {
      task_text.classList.remove('completed-text'); 
      toggle_btn.innerText = '';
      complete_task = Math.max(0, complete_task - 1);
    }

    completedTasks.innerText = `Completed: ${complete_task}`;
  });

  li.appendChild(toggle_btn);
  li.appendChild(task_text);
  li.appendChild(delete_btn);

  taskList.appendChild(li);
  tasks++;

  totalTasks.innerText = `Total tasks: ${tasks}`;
  task_input.value = '';
});
