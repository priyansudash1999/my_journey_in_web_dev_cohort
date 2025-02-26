/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

const image_div = document.getElementById('carouselTrack')
const caption = document.getElementById('caption')
const prev_btn = document.getElementById("prevButton")
const next_btn = document.getElementById('nextButton')
const carouselNav = document.getElementById('carouselNav')
const auto_play_btn = document.getElementById('autoPlayButton')
const timer = document.getElementById('timerDisplay')

let currInd = 0
let intervalId = null

function displayImage() {
  image_div.innerHTML = ''
  let image = document.createElement('img')
  image.src = images[currInd].url
  image.style.width = '100%'
  image_div.appendChild(image)

  caption.innerText = images[currInd].caption
  updateIndicators()
}

function updateIndicators() {
  carouselNav.innerHTML = ""; 
  images.forEach((_, ind)=>{
    const circle = document.createElement('span')
    circle.classList.add('carousel-indicator')
    if(ind === currInd){
      circle.classList.add('active')
    }
    circle.addEventListener('click', () => {
      currInd = ind
      displayImage()
    })
    carouselNav.appendChild(circle)
  })
}
function nextImage(){
  currInd = (currInd + 1) % images.length
  displayImage()
}

function prevImage(){
  currInd = (currInd - 1 + images.length) % images.length
  displayImage()
}

function autoPlayImages(){
  if(intervalId) return
  intervalId = setInterval(() => {
    currInd = (currInd + 1) % images.length; 
    displayImage();
  }, 5000)
}

function stopAutoPlay(){
  clearInterval(intervalId)
  intervalId = null
}

next_btn.addEventListener('click', () => {
  nextImage()
})
prev_btn.addEventListener('click', () => {
  prevImage()
})
auto_play_btn.addEventListener('click', () => {
  if(auto_play_btn.innerText === 'Start Auto Play'){
    auto_play_btn.innerText = 'Stop Auto Play'
    autoPlayImages()
  }
  else{
     auto_play_btn.innerText = 'Start Auto Play'
     stopAutoPlay()
     timer.innerText = ''
  }
})

displayImage();