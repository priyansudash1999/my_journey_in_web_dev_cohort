let submit_btn = document.getElementById('calculate')

let age = document.getElementById('age')
let height = document.getElementById('height')
let weight = document.getElementById('weight')
let data = document.getElementsByClassName('result')[0]

let bmi
let value = ''

submit_btn.addEventListener('click', () => {
  let weight_in_num = Number(weight.value)
  let height_for_calculation = Math.pow((Number(height.value)/100), 2)
  console.log(weight_in_num, height_for_calculation)
  bmi = weight_in_num / height_for_calculation

  if (bmi < 18.5){
    value = 'Underweight'
    data.innerText = `Aap ${value} lagte ho, thoda sehat pe dhyan do.`
    data.classList.add('underweight')
  }
  else if(bmi >= 18.5 && bmi <= 24.9){
    value = 'Normal weight'
    data.innerText = `Aap ${value} ho, lekin exercise chalu rakhna`
    data.classList.add('normalweight')
  }
  else if(bmi >= 25.0 && bmi <= 29.9){
    value = 'Overweight'
    data.innerText = `Aap ${value} ho, dieting karo ji`
    data.classList.add('overweight')
  }
  else if(bmi > 30){
    value = 'Obese'
    data.innerText = `Aap ${value} ho, mamla bahat gambhir hai`
    data.classList.add('obese')
  }

  age.value = ''
  height.value = ''
  weight.value = ''
})