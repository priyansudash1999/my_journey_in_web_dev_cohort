const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "In the middle of every difficulty lies opportunity. – Albert Einstein",
  "The best way to predict the future is to create it. – Peter Drucker",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
  "The secret of getting ahead is getting started. – Mark Twain",
  "It does not matter how slowly you go as long as you do not stop. – Confucius"
];



const quote = document.querySelector('.quote')
const submit_btn = document.querySelector('.generate')

submit_btn.addEventListener('click', () => {
  const index = Math.floor(Math.random() * quotes.length)
  const random_quote = quotes[index]

  quote.innerText = random_quote
})
