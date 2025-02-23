/**
 * Write your challenge solution here
 */

const zero_light = document.getElementById('bulb')
const btn = document.getElementById('toggleButton')
const status = document.getElementById('status')

btn.addEventListener('click', () => {
  if (zero_light.classList.contains('off')) {
    zero_light.classList.remove('off')
    status.innerText = 'Status: On'
    btn.innerText = 'Turn Off'
    document.body.style.backgroundColor = '#000'
    document.body.style.color = '#fff'
  } else {
    zero_light.classList.add('off')
    status.innerText = 'Status: Off'
    btn.innerText = 'Turn On'
    document.body.style.backgroundColor = '#fff'
    document.body.style.color = '#000'
  }
})