/**
 * JavaScript for changing text color using switch case
 */

const mainHeading = document.getElementById('mainHeading');

document.querySelector('.color-buttons').addEventListener('click',  (event) => {
  let color = event.target.id; 
  switch (color) {
    case 'redButton':
      mainHeading.style.color = '#e74c3c';
      break;
    case 'greenButton':
      mainHeading.style.color = '#2ecc71';
      break;
    case 'blueButton':
      mainHeading.style.color = '#3498db';
      break;
    case 'purpleButton':
      mainHeading.style.color = '#9b59b6';
      break;
    case 'resetButton':
      mainHeading.style.color = '#000'; 
      break;
    default:
      console.log('banado aapke marzi se button');
    }
});
