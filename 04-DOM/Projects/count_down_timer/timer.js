const user_input = document.getElementsByClassName('userInput')[0]
const start = document.querySelector('.start-btn')
const pause = document.querySelector('.pause-btn')
const stop = document.querySelector('.stop-btn')
const displayTime = document.querySelector('.displayTime')


let intervalId;
let isPaused = false
let time = 0

start.addEventListener('click', () => startTimer())
pause.addEventListener('click', () => pauseTimer())
stop.addEventListener('click', () => stopTimer())



function startTimer() {
  if(!isPaused) time = Number(user_input.value)

  if(isNaN(time) || time < 0){
    displayTime.innerText = `${time} is not a number`
    return
  }
  // clearInterval(intervalId)
  intervalId = setInterval(() => {
    if(!isPaused && time > 0){
      time--
      displayTime.innerText = `Seconds remaining ${time}`
    }
    if (time <= 0) {
      clearInterval(intervalId);
      displayTime.innerText = 'Time up';
      // const audio = new Audio('./audio/hululu.mp3');
      audio.play();
    }
  }, 1000)
  isPaused = false
  user_input.value = ''
}

function pauseTimer(){
  clearInterval(intervalId)
  isPaused =true
  displayTime.innerText = `Paused at: ${time} seconds`;
} 

function stopTimer() {
  clearInterval(intervalId)
  time = 0;
  isPaused = false;
  displayTime.textContent = `Time stopped`
}

