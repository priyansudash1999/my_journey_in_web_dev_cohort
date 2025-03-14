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


// get bg button
const bg_btn = document.getElementById('bg-changer')
bg_btn.addEventListener('click', () => {
  backgroundHandler()
})

// get remaining sort buttons
const continue_sort_btn = document.getElementById('continue-sort-btn')
const done_sort_button = document.getElementById('done-sort-btn')
const submit_sort_button = document.getElementById('submit-sort-btn')





// get menu icon for controlling the sidebar.
document.getElementById("menuToggle").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("hidden");
  document.getElementById("main-contents").classList.toggle("go-left");
});


todo_sort_btn.addEventListener('click', () => sort_tasks(todo_board))
continue_sort_btn.addEventListener('click', () => sort_tasks(continue_board))
done_sort_button.addEventListener('click', () => sort_tasks(done_board))
submit_sort_button.addEventListener('click', () => sort_tasks(submit_board))


document.getElementById('filter').addEventListener('click', () => filter_task())
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
  alert('Available very soon...')
}

const customize_task = () => {
  alert('Available very soon...')
}

todo_add_btn.addEventListener('click', () => addNewTodoTask())

const todo_list = [
  {title: 'chaicode Assignments', priority: 'high', date: '13rd March', time: '2 hrs'},
  {title: 'Web dev cohort Videos Revise', priority: 'medium', date: '14th March', time: '12 hrs'},
  {title: 'Web dev new Js videos', priority: 'high', date: '14th March', time: '3 hrs'},
  {title: 'DSA Array revise', priority: 'low', date: '15th March', time: '1 hrs'},
  {title: 'Jobs apply', priority: 'high', date: '09th March', time: '1 hrs'}
]


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
  const todo_date = getRequiredInput('Enter Date (like 13rd March):');
  const todo_time = getRequiredInput('Enter time in hours (like 10):');
  
  todo_list.push({title: todo_name, priority: todo_priority, date: todo_date, time: todo_time});

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

  const edit_dlt_container = document.createElement('div');
  edit_dlt_container.classList.add('edit-delete-btn')

  const edit = document.createElement('button');
  edit.innerText = '✎';
  edit.classList.add('edit')

  const dlt = document.createElement('button');
  dlt.innerText = 'X';
  dlt.classList.add('dlt')

  edit_dlt_container.appendChild(edit)
  edit_dlt_container.appendChild(dlt)


  middle_section.appendChild(priority_para);
  middle_section.appendChild(edit_dlt_container);


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


// edit_btn_handler
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit')) {
    
    const parent = event.target.closest('.task')
    const title = parent.querySelector('.top-section').querySelector('.task-title').textContent

    const findIndex = todo_list.findIndex(task => task.title === title)

    if(findIndex !== -1){
      const new_title = prompt('Enter new title:- ')
      const new_priority = prompt('Enter new priority low/medium/high:- ')
      const new_date = prompt('Enter new date:- ')
      const new_time = prompt('Enter new time:- ')

      todo_list[findIndex] = {
        title: new_title,
        priority: new_priority,
        date: new_date, 
        time: new_time
      }

      parent.querySelector('.top-section').querySelector('.task-title').textContent = new_title
      parent.querySelector('.middle-section').querySelector('.priority').textContent = new_priority
      parent.querySelector('.bottom-section').querySelector('.left-part').querySelector('.date').textContent = new_date
      parent.querySelector('.bottom-section').querySelector('.right-part').querySelector('.time').textContent = new_time
    }

    // console.log(parent)

  }
});

// delete_btn_handler
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('dlt')) {
    const parent = event.target.parentElement.parentElement.parentElement;
    parent.remove()
  }
});

document.getElementsByClassName('add')[0].addEventListener('mouseenter', () => {
  alert('It will delete the current Project because no local stoarge or database used to store')
})

document.getElementsByClassName('share-btn')[0].addEventListener('click', () => {
  alert('copy datas from browser console')
  console.log(todo_list)
})


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


const icons = document.querySelectorAll('.icon')
const main_sec = document.getElementById('main-contents')
const update_name = document.getElementsByClassName('updated')[0]
const share_title = document.getElementsByClassName('share-btn')[0]
const search_bar = document.getElementsByClassName('search-btn')[0]
const text_field = document.querySelector('.text-field')

const backgroundHandler = () => {
  if (bg_btn.innerText === '☀️') {
    black_background_handler();
  } else {
    white_background_handler();
  }
};

const black_background_handler = () => {
  icons.forEach(icon => {
    icon.style.filter = "invert(1)"; 
  });

  bg_btn.innerText = '🌙';
  document.body.style.backgroundColor = '#272929';
  document.body.style.color = '#fff';

  const filterBar = main_sec.querySelector('.filter-bar');
  if (filterBar) filterBar.classList.add('bg-dark'); 
  update_name.style.border = '1px solid white'
  share_title.style.color = '#fff'
  share_title.style.backgroundColor = '#272929'
  share_title.style.border = '1px solid white'
  search_bar.style.backgroundColor = '#272929'
  text_field.style.backgroundColor = '#272929'
  text_field.style.color = '#fff'
};

const white_background_handler = () => {
  icons.forEach(icon => {
    icon.style.filter = "invert(0)"; 
  });

  bg_btn.innerText = '☀️';
  document.body.style.backgroundColor = '#fff';
  document.body.style.color = '#000';

  const filterBar = main_sec.querySelector('.filter-bar');
  if (filterBar) filterBar.classList.remove('bg-dark');
  update_name.style.border = '1px solid black'
  share_title.style.color = '#000'
  share_title.style.backgroundColor = '#fff'
  share_title.style.border = '1px solid #272929'
  search_bar.style.backgroundColor = '#fff'
  text_field.style.backgroundColor = '#fff'
  text_field.style.color = '#000'
};


// active search
text_field.addEventListener('input', () => {
  const searchTerm = text_field.value.trim().toLowerCase();
  displayTasksAccordingToSearch(searchTerm);
})

const displayTasksAccordingToSearch = (searchTerm) => {
  const allTasks = document.querySelectorAll('.task');
  console.log(allTasks)

  allTasks.forEach((task) => {
    const title = task.querySelector('.top-section p').innerText.toLowerCase();
    if (title.includes(searchTerm)) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none'; 
    }
  });
};

getCountOfTasks()