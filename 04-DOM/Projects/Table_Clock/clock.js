// update clock
const updateClock = () => {

  const odia_time = {
    0: '୦',
    1: '୧',
    2: '୨',
    3: '୩',
    4: '୪',
    5: '୫',
    6: '୬',
    7: '୭',
    8: '୮',
    9: '୯',
    10: '୧୦',
    11: '୧୧',
    12: '୧୨',
    13: '୧୩',
    14: '୧୪',
    15: '୧୫',
    16: '୧୬',
    17: '୧୭',
    18: '୧୮',
    19: '୧୯',
    20: '୨୦',
    21: '୨୧',
    22: '୨୨',
    23: '୨୩',
    24: '୨୪',
    25: '୨୫',
    26: '୨୬',
    27: '୨୭',
    28: '୨୮',
    29: '୨୯',
    30: '୩୦',
    31: '୩୧',
    32: '୩୨',
    33: '୩୩',
    34: '୩୪',
    35: '୩୫',
    36: '୩୬',
    37: '୩୭',
    38: '୩୮',
    39: '୩୯',
    40: '୪୦',
    41: '୪୧',
    42: '୪୨',
    43: '୪୩',
    44: '୪୪',
    45: '୪୫',
    46: '୪୬',
    47: '୪୭',
    48: '୪୮',
    49: '୪୯',
    50: '୫୦',
    51: '୫୧',
    52: '୫୨',
    53: '୫୩',
    54: '୫୪',
    55: '୫୫',
    56: '୫୬',
    57: '୫୭',
    58: '୫୮',
    59: '୫୯'
  }

  const odia_am_pm = {
    "AM": "ପୂର୍ବାହ୍ନ", // Morning
    "PM": "ଅପରାହ୍ନ" // Afternoon/Evening
  };
  const time = document.getElementsByClassName('time')[0]
  const date = document.getElementsByClassName('para')[0]

  const now = new Date()
  const hours = now.getHours() ;  // if now.getHours() % 12 gives 0 then it will be 12
  const mins = now.getMinutes() // if mimute is 1 then it will show 01
  const secs = now.getSeconds()
  const am_pm = hours >= 12 ? 'PM' : 'AM'
  const hours12 = hours % 12 || 12;

  time.innerText = `${odia_time[hours12].toString().padStart(2, '୦')}:${odia_time[mins].toString().padStart(2, '୦') }:${odia_time[secs].toString().padStart(2, '୦') } ${odia_am_pm[am_pm]}`

  // display date
  const options = { 
    weekday: "long", 
    year: "numeric", 
    month: "numeric", 
    day: "numeric", 
    hour: "2-digit", 
    minute: "2-digit",
    second: "2-digit",
    hour12: true // Use 12-hour format
  };
  

  const dateString = now.toLocaleDateString(undefined, options)
  date.textContent = dateString
}


setInterval(updateClock, 1000)

updateClock() // without this the time first shows 00:00:00