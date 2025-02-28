/**
 * Write your challenge solution here
 */

const time = document.getElementsByClassName('digital-clock')[0]
const hour_hand = document.getElementsByClassName('hour')[0]
const min_hand = document.getElementsByClassName('minute')[0]
const sec_hand = document.getElementsByClassName('second')[0]

const clock = document.getElementsByClassName('clock')[0]
for(let i=1; i<=12; i++){
  let num = document.createElement('span')
  num.classList.add('num')
  num.style.setProperty('--n', i)
  num.innerText = i
  clock.appendChild(num)
}

const displayTime = () => {
  let newTime = new Date()
  let hours = newTime.getHours()
  let mins = newTime.getMinutes()
  let secs = newTime.getSeconds()

  let hourRotation = (hours % 12) * 30 + mins * 0.5; 
  let minRotation = mins * 6; 
  let secRotation = secs * 6; 

  hour_hand.style.transform = `rotate(${hourRotation}deg)`;
  min_hand.style.transform = `rotate(${minRotation}deg)`;
  sec_hand.style.transform = `rotate(${secRotation}deg)`;

  let am_or_pm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12 || 12
  let formattedHour = hours.toString().padStart(2, '0');
  let formattedMinute = mins.toString().padStart(2, '0');
  let formattedSecond = secs.toString().padStart(2, '0');
  time.innerText = `${formattedHour}:${formattedMinute}:${formattedSecond} ${am_or_pm}`
}

setInterval(displayTime, 1000)
displayTime()