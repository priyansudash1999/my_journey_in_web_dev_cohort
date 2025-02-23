/**
 * Write your challenge solution here
 */
const name = document.getElementById('nameInput')
const job = document.getElementById('jobInput')
const age = document.getElementById('ageInput')
const bio = document.getElementById('bioInput')

let nameDisplay = document.getElementById('nameDisplay')
let jobDisplay = document.getElementById('jobDisplay')
let ageDisplay = document.getElementById('ageDisplay')
let bioDisplay = document.getElementById('bioDisplay')

name.addEventListener('input', (e) => {
  nameDisplay.innerText = e.target.value
})
job.addEventListener('input', (e) => {
  jobDisplay.innerText = e.target.value
})
age.addEventListener('input', (e) => {
  ageDisplay.innerText = e.target.value
})
bio.addEventListener('input', (e) => {
  bioDisplay.innerText = e.target.value
})