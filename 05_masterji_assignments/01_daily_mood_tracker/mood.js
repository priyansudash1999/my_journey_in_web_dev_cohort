const happy_mood = document.getElementById('happy')
const sad_mood = document.getElementById('sad')
const neutral_mood = document.getElementById('neutral')
const excited_mood = document.getElementById('excited')
const boring_mood = document.getElementById('boring')
const main_line = document.getElementsByClassName('hr-line')[0]

document.addEventListener('DOMContentLoaded', displayLocalStorageItem)

happy_mood.addEventListener('click', (e) =>  displayOnScreen(e))
sad_mood.addEventListener('click', (e) =>  displayOnScreen(e))
neutral_mood.addEventListener('click', (e) =>  displayOnScreen(e))
excited_mood.addEventListener('click', (e) => displayOnScreen(e))
boring_mood.addEventListener('click', (e) => displayOnScreen(e))

let count = 0

function displayOnScreen(e){
  if(count < 9){
    const mood_display = document.createElement('div')
    const small_vr = document.createElement('div')

    const date = new Date()
    console.log(date)

    const date_create = document.createElement('h5')
    const time_create = document.createElement('p')
    const emoji_show = document.createElement('p')

    emoji_show.classList.add('mood')
    time_create.classList.add('time')
    date_create.classList.add('date')
    mood_display.classList.add('mood-display')
    small_vr.classList.add('small-vr')

    const selectedEmoji = e.target.innerText
    console.log(selectedEmoji);
    if(selectedEmoji === '😀'){
      emoji_show.innerText = 'Mood:- 😀'
      alert('You feel happy')
    }
    else if(selectedEmoji === '😌'){
      emoji_show.innerText = 'Mood:- 😌'
      alert('You feel sad')
    }
    else if(selectedEmoji === '🙂'){
      emoji_show.innerText = 'Mood:- 🙂'
      alert('You feel neutral')
    }
    else if(selectedEmoji === '🥳'){
      emoji_show.innerText = 'Mood:- 🥳'
      alert('You feel excited')
    }
    else if(selectedEmoji === '🥱'){
      emoji_show.innerText = 'Mood:- 🥱'
      alert('You feel boring')
    }
    date_create.innerText = `Date:- ${date.getDate()}/${String(date.getMonth() + 1).padStart(2, '0')}`
    let hour = date.getHours() 
    let mins = date.getMinutes()
    let am_pm =  hour >= 12 ? 'PM' : "AM"
    let modified_hour = hour % 12

    time_create.innerText = `Time:- ${String(modified_hour).padStart(2, '0')
    }:${String(mins).padStart(2, '0')} ${am_pm}`


    mood_display.appendChild(date_create)
    mood_display.appendChild(time_create)
    mood_display.appendChild(emoji_show)

    small_vr.appendChild(mood_display)
    
    main_line.appendChild(small_vr)
    storeToLocalStorage(date_create.innerText, time_create.innerText, selectedEmoji)

    count++
  }
  else{
    alert('It is full')
    return
  }
}

function storeToLocalStorage(date, time, emoji){
  let user_moods = JSON.parse(localStorage.getItem('moods'))|| []
  user_moods.push({date, time, emoji})
  localStorage.setItem('moods', JSON.stringify(user_moods))
}

function displayLocalStorageItem(){
  let user_moods = JSON.parse(localStorage.getItem('moods')) || []
  user_moods.forEach(element => {
    const mood_display = document.createElement('div')
    const small_vr = document.createElement('div')
    const date_create = document.createElement('h5')
    const time_create = document.createElement('p')
    const emoji_show = document.createElement('p')

    emoji_show.classList.add('mood')
    time_create.classList.add('time')
    date_create.classList.add('date')
    mood_display.classList.add('mood-display')
    small_vr.classList.add('small-vr')

    date_create.innerText = element.date
    time_create.innerText = element.time
    emoji_show.innerText = `Mood:- ${element.emoji}`

    mood_display.appendChild(date_create)
    mood_display.appendChild(time_create)
    mood_display.appendChild(emoji_show)

    small_vr.appendChild(mood_display)
    main_line.appendChild(small_vr)
  })
}