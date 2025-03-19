const happy_mood = document.getElementById('happy')
const sad_mood = document.getElementById('sad')
const neutral_mood = document.getElementById('neutral')
const excited_mood = document.getElementById('excited')
const boring_mood = document.getElementById('boring')
const main_line = document.getElementsByClassName('hr-line')[0]


happy_mood.addEventListener('click', () => storeAndDisplay())
sad_mood.addEventListener('click', () => storeAndDisplay())
neutral_mood.addEventListener('click', () => storeAndDisplay())
excited_mood.addEventListener('click', () => storeAndDisplay())
boring_mood.addEventListener('click', () => storeAndDisplay())

function storeAndDisplay(){
  const small_vr = document.createElement('div')
  const mood_display = document.createElement('div')

  const date_create = document.createElement('h5')
  const time_create = document.createElement('p')
  const emoji_show = document.createElement('p')

  emoji_show.classList.add('mood')
  time_create.classList.add('time')
  date_create.classList.add('date')
  mood_display.classList.add('mood-display')
  small_vr.classList.add('small-vr')

  

}

