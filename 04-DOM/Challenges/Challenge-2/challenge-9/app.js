/**
 * Write your challenge solution here
 */
const open_close_btn = document.querySelector('.toggle-btn')
const only_close_btn = document.querySelector('.close-btn')
const panel = document.querySelector('.panel')

open_close_btn.addEventListener('click', () => {
  if(panel.classList.contains('active')){
    panel.classList.remove('active')
    open_close_btn.innerText = 'Open Menu'
    open_close_btn.style.backgroundColor = '#4caf50'
  }
  else{
    panel.classList.add('active')
    open_close_btn.innerText = 'Close Menu'
    open_close_btn.style.backgroundColor = '#ff4444'
  }
})

only_close_btn.addEventListener('click', () => {
  panel.classList.remove('active')
})