/**
 * Write your challenge solution here
 */
const btns = document.querySelectorAll('.accordion-button')
const items = document.querySelectorAll('.accordion-item')

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    // parent element of the btn
    const parentEle = btn.parentElement;

    // contents in the parent element of the button
    const content = parentEle.querySelector('.accordion-content')

    // arrow sign of the button
    const arrow = btn.querySelector('.arrow')

    // CLOSE all the open accordion except the clicked one
    items.forEach(item => {
      if (item !== parentEle) {
        item.querySelector('.accordion-content').style.maxHeight = null;
        item.querySelector('.accordion-button').classList.remove('active');
        item.querySelector('.arrow').style.transform = 'rotate(0deg)';
      }
    })

    if(content.style.maxHeight){
      content.style.maxHeight = null
      btn.classList.remove('active')
      arrow.style.transform = 'rotate(0deg)'
    }
    else{
      content.style.maxHeight = content.scrollHeight + 'px'
      btn.classList.add('active');
      arrow.style.transform = 'rotate(180deg)';
    }
  })
});