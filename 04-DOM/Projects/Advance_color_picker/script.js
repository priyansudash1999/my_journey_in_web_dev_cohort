const colorInput = document.getElementById('colorInput')
const colorValue = document.getElementById('colorValue')
const coptBtn = document.getElementById('coptBtn')

const compliment_color_container = document.getElementsByClassName('complementary-color-container')[0]
const compliment_color_code = document.getElementsByClassName('complement-color-value')[0]
const saveBtn = document.getElementById('saveColorButton')
const favouriteContainer = document.getElementsByClassName('favouriteContainer')[0]
const favouriteList = document.getElementsByClassName('list_of_saved_color')[0]

colorInput.addEventListener('input', () => {
  let value = colorInput.value
  value = value.slice(1)
  console.log(value)
  colorValue.innerText = `#${value}`


  let base_color_value = parseInt(value, 16)
  console.log(base_color_value);
  let compliment_color_value = (0xFFFFFF ^ base_color_value).toString(16).padStart(6, '0')
 
  compliment_color_value = `#${compliment_color_value}`
  console.log(compliment_color_value)
  compliment_color_code.innerText = compliment_color_value
  compliment_color_container.classList.add('complement-color')
  compliment_color_container.style.backgroundColor = compliment_color_value
})

coptBtn.addEventListener('click', () => {
  let input = document.getElementById('colorValue').textContent
  navigator.clipboard.writeText(input)
    .then(() => alert('copied:- '+ input))
    .catch(err => console.error('Getting error when try to copy', err))
})

saveBtn.addEventListener('click', () => {
  let li = document.createElement('div')
  li.classList.add('color-list')
  li.style.backgroundColor = compliment_color_code.textContent
  favouriteList.appendChild(li)
})