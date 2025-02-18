let input_container = document.getElementById('input')
let buttons = document.querySelectorAll('.btn')
let lang_container = document.getElementById('toggle-icon')
let info = document.getElementById('info')
let operators = document.querySelectorAll('.operator')
let title = document.getElementsByClassName('title')[0]

// get all numbers indivisually
let zero = document.getElementById('zero')
let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')
let dbl_zero = document.getElementById('double-zero')

let string = ''

buttons.forEach(btn => {
  btn.addEventListener('click', (b) => {
    //  check the input is equal button or not
    if(b.target.innerText === '='){
      string = String(eval(string))
      input_container.value = string
    }
    // check its AC 
    else if(b.target.innerText === 'AC'){
      string= ''
      input_container.value = 0
    }
    // check its C
    else if(b.target.innerText === 'C'){
      string = string.slice(0, -1)
      input_container.value = string 
    }
    // otherwise
    else{
      if(input_container.innerText === '0'){
        string = b.target.innerText
      }
      else{
        string += b.target.innerText
      }
      input_container.value = string 
    }
  } )
})

lang_container.addEventListener('click', ()=> {
  if(lang_container.innerText == 'IN'){
    zero.innerText = '०'
    one.innerText = '१'
    two.innerText = '२'
    three.innerText = '३'
    four.innerText = '४'
    five.innerText = '५'
    six.innerText = '६'
    seven.innerText = '७'
    eight.innerText = '८'
    nine.innerText = '९'
    dbl_zero.innerText = '००'
    lang_container.innerText = 'US'
    info.innerText = 'अभी के लिए, आप हिंदी में गणना नहीं कर सकते।'
    title.innerText = 'गणना यंत्र'
  }
  else{
    info.innerText=''
    zero.innerText = '0'
    one.innerText = '1'
    two.innerText = '2'
    three.innerText = '3'
    four.innerText = '4'
    five.innerText = '5'
    six.innerText = '6'
    seven.innerText = '7'
    eight.innerText = '8'
    nine.innerText = '9'
    dbl_zero.innerText = '00'
    lang_container.innerText = 'IN'
    title.innerText= 'Calculator'
  }
})