let title_input = document.querySelector('.review-title'); 
let input_desc = document.getElementById('review-desc');
let btn = document.querySelector('.submit');
const lists = document.getElementById('lists');
const stars = document.querySelectorAll('.star'); 
let selectedRating = 0; 

stars.forEach(star => {
  star.addEventListener("click", () => {
    selectedRating = parseInt(star.getAttribute("data-value")); 

    // Highlight selected stars
    stars.forEach((s, index) => {
      s.innerHTML = index < selectedRating ? '★' : '☆'; 
      s.classList.toggle('active', index < selectedRating);
    });
  });
});

btn.addEventListener('click', () => {
  if (title_input.value.trim() === '' || input_desc.value.trim() === '') {
    alert('Provide some information');
    return;
  }

  if (selectedRating === 0) {
    alert('Please select a rating');
    return;
  }

  let li = document.createElement('li');
  li.innerHTML = `
    <div class="li-container">
      <h3 class="li-title">Title: ${title_input.value}</h3>
      <p class="li-desc">Description: ${input_desc.value}</p>
      <p class="li-rating">Rating: ${'★'.repeat(selectedRating) + '☆'.repeat(5 - selectedRating)}</p>
    </div>`;
  
  li.classList.add('list_of_reviews');
  lists.appendChild(li);


  title_input.value = '';
  input_desc.value = '';
  selectedRating = 0;

  stars.forEach(s => {
    s.innerHTML = '☆'; 
    s.classList.remove('active');
  });
});
